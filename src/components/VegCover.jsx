import React from 'react';
import InputWidget from '../components/InputWidget'

class VegCover extends React.Component {
	render() {
		return (
			<InputWidget name='Initial Vegetation Cover'>
				<div id="initial_vegetation_container" className="collapsible_div collapsed full_border_radius">
              <div id="veg_slider_notice">
                Note: Initial vegetation cover values can only be modified when doing a non-spatial run (under Run Control, set the spatial output switch to "Off").
              </div>
              <div id="vegtype_slider_container">
                <table id="vegTypeSliderTable" className="sliderTable"></table>
              </div>
              <div id="total_input_percent_div">
                Total Percent Cover:
                <div id="total_input_percent">
                  100%
                </div>
              </div>
            </div>
			</InputWidget>
		)
	}
}

export default VegCover;