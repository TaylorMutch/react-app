import {
    REQUEST_PROJECT, RECEIVE_PROJECT,
    REQUEST_DEFINITIONS, RECEIVE_DEFINITIONS,
    REQUEST_SCENARIO, RECEIVE_SCENARIO,
    REQUEST_CONFIGURATION, RECEIVE_CONFIGURATION
} from '../actions/scenario';
import { morph } from '../utils';

const defaultState = {
    currentProject: null,
    currentDefinitions: null,
    currentScenario: null,
    currentConfiguration: null,
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
            let blah = morph(state, {currentConfiguration: action.configuration});
            console.log(blah);
            return blah;
        default:
            return state;
    }
}
