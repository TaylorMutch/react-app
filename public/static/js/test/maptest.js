/* Main file for ./maptest/ */
var available_libraries = [];
var current_library = {};
var project_url = '';
var available_projects = [];
var current_project = {};
var available_scenarios = [];
var scenario_url = '';
var current_scenario = {};

// Basemap
var basemap = L.esri.basemapLayer("Gray");
var basemaps = {"Basemap": basemap};

var map = L.map("map", {
    clickable: false,
    drawcontrol: false,
    layers: [basemap]
}).setView([40, -113], 5);


// Title
var title = L.control();
title.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'ctl title');
    this.update();
    return this._div;
};
title.update = function(props) {
    this._div.innerHTML = "Castle Creek";
};
title.addTo(map);


// Note
var src = 'Generated by ncdjango';
var title = L.control({position: 'bottomleft'});
title.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'ctl src');
    this.update();
    return this._div;
};
title.update = function(props) {
    this._div.innerHTML = src;
};
title.addTo(map);

function addServices(config) {

    var elevation = L.tileLayer("http://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png");
    var t0it1 = {'t': 0, 'it': 1};
    var t0it0 = {'t': 0, 'it': 0};

    var stratum = L.tileLayer(config.scenario_input_services.stratum);
    var stateclass_initial = L.tileLayer(config.scenario_input_services.stateclass);
    var age = L.tileLayer(config.scenario_output_services.age, t0it1);
    var stateclass_output = L.tileLayer(config.scenario_output_services.stateclass, t0it1);

    var overlaymaps = {
        "Elevation (encoded)": elevation,
        "Strata": stratum,
        "State Classes (Initial)": stateclass_initial,
        "Age": age,
        "State Classes (Output)": stateclass_output
    };

    // per-type outputs
    for (var i = 0; i < config.scenario_output_services.state_attribute.length; i++) {
        overlaymaps['State Attribute ' + String(i)] = L.tileLayer(config.scenario_output_services.state_attribute[i], t0it1);
    }
    for (var i = 0; i < config.scenario_output_services.transition_attribute.length; i++) {
        overlaymaps['Transition Attribute ' + String(i)] = L.tileLayer(config.scenario_output_services.transition_attribute[i], t0it1);
    }
    for (var i = 0; i < config.scenario_output_services.transition_group.length; i++) {
        overlaymaps['Transition Group ' + String(i)] = L.tileLayer(config.scenario_output_services.transition_group[i], t0it1);
    }
    for (var i = 0; i < config.scenario_output_services.avg_annual_transition_group_probability.length; i++) {
        overlaymaps['Avg. Ann. Transition Prob. ' + String(i)] = L.tileLayer(config.scenario_output_services.avg_annual_transition_group_probability[i], t0it0);
    }

    // Add base layers
    L.control.layers(basemaps, overlaymaps, {collapsed: false}).addTo(map);

    var timestep_slider = L.control.range({
        position: 'topright',
        min: config.run_control.min_timestep,
        max: config.run_control.max_timestep - 1,
        value: config.run_control.min_timestep,
        step: 1,
        orient: 'horizontal',
        iconClass: 'leaflet-range-icon'
    });

    timestep_slider.on('input change', function (e) {

    for (var prop in overlaymaps) {
        if (overlaymaps.hasOwnProperty(prop)) {
            overlaymaps[prop].options.t = Number(e.value);
            overlaymaps[prop].redraw();
        }
    }
    });

    map.addControl(timestep_slider);
}


// Top-level endpoint, get list of available libraries
$.getJSON('/api/libraries/').done(function (res) {

    available_libraries = res.results;
    console.log(available_libraries);
    current_library = available_libraries[0];
    available_projects = current_library.projects;

    // Select project from list; here we are just taking the top one
    project_url = available_projects[0];

    $.getJSON(project_url).done(function (project) {
        console.log(project);
        current_project = project;
        available_scenarios = current_project.scenarios;

        // Get project definitions
        $.getJSON(project_url + 'definitions').done(function (definitions) {
            console.log(definitions);
            current_project.definitions = definitions;
        });

        // Select scenario from list; here we are just taking the most recent one
        scenario_url = available_scenarios[available_scenarios.length - 1];

        // Get scenario information
        $.getJSON(scenario_url).done(function (scenario) {
            console.log(scenario);
            current_scenario = scenario;

            // Scenario configuration (at import)
            $.getJSON(scenario_url + 'config').done(function (config) {
                console.log(config);
                current_scenario.config = config;
                addServices(config);
            })

        })
    })
});




/*
L.tileLayer.wms("http://landfire.cr.usgs.gov/arcgis/services/Landfire/US_140/MapServer/WMSServer?", {
	//layers: "US_140EVH",
	layers: "US_140EVT",

	format: "image/png",
	transparent: true
}).addTo(map);
*/

// Here is our elevation service!
//var elevation = L.tileLayer("http://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png").addTo(map);
//
//// Here is where we get texture data
//var landfire = L.tileLayer.wms("http://landfire.cr.usgs.gov/arcgis/services/Landfire/US_130/MapServer/WMSServer?", {
//	layers: "US_130SCLASS", 	//layers: "US_130BPS",
//	format: "image/png",
//	transparent: true
//}).addTo(map);
//
//
//// https://gist.github.com/mourner/8825883
//// Returns the tiles we need for input into webgl
//function getTileUrls(bounds, tileLayer, zoom) {
//    var min = map.project(bounds.getNorthWest(), zoom).divideBy(256).floor(),
//        max = map.project(bounds.getSouthEast(), zoom).divideBy(256).floor(),
//        urls = [];
//
//    for (var i = min.x; i <= max.x; i++) {
//        for (var j = min.y; j <= max.y; j++) {
//            var coords = new L.Point(i, j);
//            coords.z = zoom;
//            urls.push(tileLayer.getTileUrl(coords));
//        }
//    }
//    return urls;
//}
//
//
//// Borrowed from landscape sim, courtesy Mike Gough. Draws a layer for selecting a bbox.
//
//var drawnItems = L.featureGroup().addTo(map);
//
//var drawButtons = new L.Control.Draw({
//    draw: {
//        polyline: false,
//        circle: false,
//        marker: false,
//        polygon: false,
//        rectangle: {
//            shapeOptions: {
//                color:"#00FFFF",
//                opacity:.6
//            }
//        },
//        showArea:true,
//    },
//});
//
//map.addControl(drawButtons);
//
//var drawn_layer;
//
//map.on('draw:created', function (e) {
//
//    if (typeof drawn_layer != "undefined" && map.hasLayer(drawn_layer)){
//        map.removeLayer(drawn_layer)
//    }
//
//    drawn_layer = e.layer;
//
//    var type = e.layerType;
//    drawnItems.addLayer(e.layer);
//
//    var textureURLS = getTileUrls(e.layer._bounds, landfire, map.getZoom());
//
//    var elevationURLS = getTileUrls(e.layer._bounds, elevation, map.getZoom());
//
//    // The URLs we can feed in to my existing 3D viewer and render in the browser
//    console.log(textureURLS);
//    console.log(elevationURLS);
//
//});

// Considerations for webgl and leaflet
/*
	- zoom level will dictate LOD, or loading more data. we'll have to introduce boundaries
	- alternatively, use a global setup so you always wrap around a sphere. introduces great circle calculations
	- works with wms, mbtiles, mapnik, and probably others
	- allows for use of https://gitlab.com/IvanSanchez/Leaflet.TileLayer.GL
	    - this could actually be quite useful for styling in the browser w/o having to resort completely to mapbox gl - could give some control over raster tiles; experiments would be necessary
	    -  since it uses the same data, you're not getting faster loading, but the images will be crisper since its native resolution in webgl
	- many many cool things!
=*/