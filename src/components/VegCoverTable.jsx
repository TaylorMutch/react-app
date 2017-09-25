import React from 'react'
import InputWidget from '../containers/InputWidget'
import VegSlider from '../components/VegSlider'

class VegCoverTable extends React.Component {
	render() {

        let { defs, scenario } = this.props

        console.log(defs)
        console.log(scenario)

        //let 

        let sliders = () => {
            return (
                <table id="vegTypeSliderTable" className="sliderTable">
                    <tbody>
                        <VegSlider/>
                        <VegSlider/>
                    </tbody>
                </table>
            )   
        }

		return (
		    <InputWidget name='Initial Vegetation Cover'>
                <div id="veg_slider_notice">
                    Note: Initial vegetation cover values can only be modified when doing a non-spatial run (under Run Control, set the spatial output switch to "Off").
                </div>
                <div id="vegtype_slider_container">
                    {sliders()}
                </div>
                <div id="total_input_percent_div">
                    Total Percent Cover:
                    <div id="total_input_percent">
                        100%
                    </div>
                </div>
			</InputWidget>
		)
	}
}

export default VegCoverTable;
