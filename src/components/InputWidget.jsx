import React from 'react';
import PropTypes from 'prop-types';

const InputWidget = ({name, children}) => {
		
	return (
		<div className='widget_div'>
			<div className='header full_border_radius'>
				{name}
				<img className='collapse_icon' src='static/img/collapse_down_arrow.png' alt=''/>
			</div>
			<div className='collapsible_div' visibility='visible'>
			{children}
			</div>
		</div>
	)
}


InputWidget.propTypes = {
	name: PropTypes.string.isRequired
}


export default InputWidget;