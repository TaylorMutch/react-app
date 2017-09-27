import React from 'react';
import PropTypes from 'prop-types';

class InputWidget extends React.Component {

	render () {

		let { name, children, active, initialized, onExpand } = this.props

		let style = {}
		let isActive = name === active || !initialized
		if (!isActive) {
			style.display = 'none'
		}
		let collapseClassName = 'collapse_icon' + ((isActive) ? ' rotate90' : '')

		return (
			<div className='widget_div'>
				<div className='header full_border_radius' onClick={e => onExpand(name)}>
					{name}
					<img className={collapseClassName} src='static/img/collapse_down_arrow.png' alt=''/>
				</div>
				<div className='collapsible_div' visibility='visible' style={style}>
				{children}
				</div>
			</div>
		)
	}
}

InputWidget.propTypes = {
	name: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default InputWidget
