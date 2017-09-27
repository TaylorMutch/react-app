import React from 'react';
import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'
import Slider from 'rc-slider'
import InputWidget from '../containers/InputWidget'
import { libraryConfig } from '../config'

class ProbabilisticTransitionTable extends React.Component {
	render() {

		let { defs, name } = this.props
		let actions = libraryConfig.find(x => x.name === name).management_actions_filter
		let sliders = () => {
			let { transition_groups } = defs
			return transition_groups.map(x => {

				// Only render actions that we have defined in the configuration
				let actionName = actions[x.name]
				if (!actionName) return null

				return (
					<tr key={x.id}>
						<td>
							<label htmlFor='amount_veg1'>
								<span className='transition_type'>
									{actionName}
								</span>
							</label>
							<input type='text' className='current_probability_slider_setting' readOnly />
							<Slider min={0} max={4} defaultValue={2}/>
						</td>
					</tr>
				)
			})
		}

		return (
			<InputWidget name='Probabilistic Transitions'>
				<table id="probabilisticTransitionSliderTable" className="sliderTable">
					<tbody>
						{sliders()}
					</tbody>
				</table>
			</InputWidget>
		)
	}
}

export default ProbabilisticTransitionTable;
