import React from 'react';
import InputWidget from '../components/InputWidget'

class WelcomeWidget extends React.Component {
	render() {
		return (
			<InputWidget name='Welcome & Getting Started'>
				<div id="intro">
					The 3D Landscape Simulator is a web-based state-and-transition modelling framework powered by ST-Sim.
            		<p>
            		It is designed to simulate the future vegetation composition of a selected area based on a set of initial conditions, probabilistic transitions, and management actions.
            		</p>
            		<p>
            		To get started, select an ST-Sim library from the table below.
            		</p>
            	</div>
			</InputWidget>
		)
	}
}

export default WelcomeWidget;