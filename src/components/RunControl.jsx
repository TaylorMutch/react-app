import React from 'react';
import InputWidget from '../containers/InputWidget'

class RunControl extends React.Component {
	render() {
		return (
			<InputWidget name='Run Control'>
				<table id="general_settings_table">
				<tbody>
                <tr>
                  <td>
                    <div id="timesteps_div" className="general_settings_div">
                      Timesteps:
                    </div>
                  </td>
                  <td>
                    <div className="select_container_2">
                      <input id="settings_timesteps" type="text"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="iterations_div" className="general_settings_div">
                      Iterations:
                    </div>
                  </td>
                  <td>
                    <div className="select_container_2">
                      <input id="settings_iterations" type="text" defaultValue="1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="run_mode_div" className="general_settings_div">
                      Spatial Output:
                    </div>
                  </td>
                  <td>
                    <div id="spatial_control">
                      <div id="spatial_off">
                        Off
                      </div>
                      <label className="switch">
                        <input id="spatial_switch" defaultChecked type="checkbox"/>
                        <div className="slider round"></div>
                      </label>
                      <div id="spatial_on">
                        On
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
			</InputWidget>
		)
	}
}

export default RunControl;