import React from 'react';
import InputWidget from '../containers/InputWidget'
import { getInteger } from '../utils'

const NumberInput = ({name, value, defaultValue, handleOnChange}) => {
    return (
        <tr>
            <td>
                <div className="general_settings_div">
                    {name}:
                </div>
            </td>
            <td>
                <div className="select_container_2">
                    <input
                    style={{width: '140px'}}
                    type='number'
                    defaultValue={defaultValue}
                    onChange={handleOnChange}
                    value={value}
                    min={1}
                    />
                </div>
            </td>
        </tr>
    )
}

const SpatialSwitch = ({value, handleOnChange}) => {
    return (
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
                        <div className="slider round" onClick={handleOnChange}></div>
                    </label>
                    <div id="spatial_on">
                        On
                    </div>
                </div>
            </td>
        </tr>
    )
}

class RunControl extends React.Component {
	render() {
        let { timesteps, iterations, isSpatial, onTimestep, onIteration, onSpatial } = this.props

        return (
            <InputWidget name='Run Control'>
                <table id="general_settings_table">
                    <tbody>
                        <NumberInput name='Timesteps' defaultValue={5}
                        handleOnChange={e => {onTimestep(getInteger(e.target.value))}}
                        value={timesteps}
                        />
                        <NumberInput name='Iterations' defaultValue={1}
                        handleOnChange={e => {onIteration(getInteger(e.target.value))}}
                        value={iterations}
                        />
                        <SpatialSwitch value={isSpatial}
                        handleOnChange={e => {
                            onSpatial(!isSpatial)
                            }} />
                    </tbody>
                </table>
            </InputWidget>
        )
    }
}

export default RunControl;
