import React from 'react';

class Legend extends React.Component {
    render() {
        return (
            <div id="legend_container" className="widget_div">
                <div id="legend_header" className="full_border_radius header right_header">
                    Legend
                    <img className="collapse_icon" src="static/img/collapse_down_arrow.png" alt=''/>
                </div>
                <div className="collapsible_div collapsed">
                    <div id="scene_legend"></div>
                </div>
            </div>
        )
    }
}

export default Legend;
