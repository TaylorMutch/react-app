import React from 'react';
import InputWidget from '../components/InputWidget'

class ProbabilisticTransition extends React.Component {
	render() {
		return (
			<InputWidget name='Probabilistic Transitions'>
				<table id="probabilisticTransitionSliderTable" className="sliderTable"></table>
			</InputWidget>
		)
	}
}

export default ProbabilisticTransition;