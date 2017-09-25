import React from 'react';
import PropTypes from 'prop-types';
import InputWidget from '../containers/InputWidget';
import ActivateButton from '../components/ActivateButton';
import { libraryConfig } from '../config';

class Library extends React.Component {

	componentDidMount() {
		this.props.onLoad();
	}

	render() {

		let { name, libraries, onSetLibrary, onLoadLibrary } = this.props;

		let options = () => {
			return (
				libraries.map((x, index) => {
					return (
						<option key={index} value={x.name}>{x.name}</option>
					)
				})
			)
		}

		let rowStyle = {'display': name.length ? 'table-row' : 'none'};
		let cellStyle = {'display': name.length ? 'table-cell' : 'none'};
		let currentConfig = libraryConfig.find(x => x.name === name);
	
		if (!currentConfig) {
			currentConfig = {'author': '', 'data': '', 'description': ''};	// TODO - better way than setting a bunch of empty strings?
		}

		return (
			<InputWidget name='ST-Sim Library'>
				<div id="library_info">
        			<table id="library_info_table">
						<tbody>
							<tr>
								<td style={cellStyle}>
									Library:
								</td>
								<td className="initial_td_styling">
					 				<div style={{'textAlign': 'center', 'width': '100%'}}>
						   				<select style={{'marginRight': 'auto', 'width': '100%'}} name="model_selection"
											onChange={e => {
												e.preventDefault();
												let selected = libraryConfig.find(x => x.name === e.target.value);
												if (selected) {
													onSetLibrary(selected.name);
												} else {
													onSetLibrary('');
												}
											}}>
								 		<option value='Select a Library'>Select a Library</option>
										{options()}
						   				</select>
					   				</div>
				   				</td>
			  				</tr>
			  				<tr style={rowStyle}><td>Author:</td><td><div id="library_author">{currentConfig.author}</div></td></tr>
			 				<tr style={rowStyle}><td>Date:</td><td><div id="library_date">{currentConfig.date}</div></td></tr>
			 				<tr style={rowStyle}><td>Description:</td><td><div id="library_description">{currentConfig.description}</div></td></tr>
			 			</tbody>
           			</table>
           			<ActivateButton id='start_button' value='Load Library' visible={name.length > 0}
					   onClick={e => {
						   e.preventDefault();
						   onLoadLibrary();
					   }}
					/>
     			</div>
			</InputWidget>
		)
	}
}

Library.propTypes = {
	name: PropTypes.string.isRequired,
	onSetLibrary: PropTypes.func.isRequired,
	onLoadLibrary: PropTypes.func.isRequired
}

export default Library;
