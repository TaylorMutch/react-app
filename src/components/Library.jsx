import React from 'react';
import PropTypes from 'prop-types';
import InputWidget from '../components/InputWidget';
import { libraryConfig } from '../config';

const Library = ({name, onSetLibrary, onLoadLibrary}) => {
	
		return (
			<InputWidget name='ST-Sim Library'>
				<div id="library_info">
            		<table id="library_info_table">
            			<tbody>
              			<tr>
                			<td className="library_info_hidden">
                				Library:
                			</td>
                			<td className="initial_td_styling">
                  				<div id="model_selection_container">
                    				<select className="model_selection"
											name="model_selection"
											id="model_selection1"
											onChange={e => {
												e.preventDefault();
												onSetLibrary(libraryConfig[e.target.value].name)}}>
                    	  				<option disabled defaultValue='Select a Library'>Select a Library</option>
                    				</select>
                  				</div>
                			</td>
              			</tr>
              			<tr className="library_info_hidden"><td>Author:</td><td><div id="library_author"></div></td></tr>
              			<tr className="library_info_hidden"><td>Date:</td><td><div id="library_date"></div></td></tr>
              			<tr className="library_info_hidden"><td>Description:</td><td><div id="library_description"></div></td></tr>
            			</tbody>
            		</table>
            		<input
					type="button"
					className="my-button my-button-ok"
					id="start_button" 
					value="Load Library"
					onClick={e => {
							e.preventDefault();
							onLoadLibrary();
						}}
					/>
          		</div>
			</InputWidget>
		)
}

Library.propTypes = {
	name: PropTypes.string,
	onSetLibrary: PropTypes.func.isRequired,
	onLoadLibrary: PropTypes.func.isRequired
}

export default Library;