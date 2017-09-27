import React from 'react'
import InputWidget from '../containers/InputWidget'
import VegSlider from '../containers/VegSlider'

class VegCoverTable extends React.Component {

	render() {

        let { defs, scenario, config } = this.props
        
        if (!(defs !== null && scenario !== null && config !== null)) return null

        let { run_control, initial_conditions_nonspatial_distributions: dist } = config
        let total = parseInt(dist.map(x => x.relative_amount).reduce((a, b) => a + b), 10)
        let sliders = () => {

            let { strata } = defs;
            
            return (
                <table id="vegTypeSliderTable" className="sliderTable">
                    <tbody>
                        {strata.map(veg => {
                            return (
                                <tr key={veg.id}>
                                    <td>
                                        <VegSlider veg={veg}
                                        distribution={dist.filter(x => x.stratum === veg.id)}
                                        disabled={run_control.is_spatial}/>
                                    </td>
                                </tr>
                            )
                        })}
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
                        {total}%
                    </div>
                </div>
			</InputWidget>
		)
	}
}

export default VegCoverTable;
