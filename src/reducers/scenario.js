import {
    REQUEST_PROJECT, RECEIVE_PROJECT,
    REQUEST_DEFINITIONS, RECEIVE_DEFINITIONS,
    REQUEST_SCENARIO, RECEIVE_SCENARIO,
    REQUEST_CONFIGURATION, RECEIVE_CONFIGURATION
} from '../actions/scenario';
import { SET_TIMESTEPS, SET_ITERATIONS, SET_SPATIAL } from '../actions/runcontrol'
import { morph } from '../utils';

const defaultState = {
    currentProject: null,
    currentDefinitions: null,
    currentScenario: null,
    currentConfiguration: null,
}

const updateTimestep = ({timesteps}, {currentConfiguration}) => {
    let { run_control } = currentConfiguration
    run_control.max_timestep = timesteps
    return morph(currentConfiguration, {run_control})
}

const updateIteration = ({iterations}, {currentConfiguration}) => {
    let { run_control } = currentConfiguration
    run_control.max_iteration = iterations
    return morph(currentConfiguration, {run_control})
}

const updateSpatial = ({is_spatial}, {currentConfiguration}) => {
    let { run_control, output_options } = currentConfiguration
    
    let newOutputState = {
        raster_sc: is_spatial,
        raster_sc_t: is_spatial ? 1 : -1
    }
    
    run_control = morph(run_control, {is_spatial})
    output_options = morph(output_options, newOutputState)
    return morph(currentConfiguration, {run_control, output_options})
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_PROJECT:
            return morph(state, {currentProject: null});
        
        case RECEIVE_PROJECT:
            return morph(state, {currentProject: action.project});
        
        case REQUEST_DEFINITIONS:
            return morph(state, {currentDefinitions: null});
        
        case RECEIVE_DEFINITIONS:
            return morph(state, {currentDefinitions: action.definitions})
        
        case REQUEST_SCENARIO:
            return morph(state, {currentScenario: null});
        
        case RECEIVE_SCENARIO:
            return morph(state, {currentScenario: action.scenario});
        
        case REQUEST_CONFIGURATION:
            return morph(state, {currentConfiguration: null});
        
        case RECEIVE_CONFIGURATION:
            return morph(state, {currentConfiguration: action.configuration});
        
        case SET_TIMESTEPS:
            return morph(state, {currentConfiguration: updateTimestep(action, state)})
                
        case SET_ITERATIONS:
            return morph(state, {currentConfiguration: updateIteration(action, state)})
        
        case SET_SPATIAL:
            let result = morph(state, {currentConfiguration: updateSpatial(action, state)})
            console.log(result)    
            return result

        default:
            return state;
    }
}
