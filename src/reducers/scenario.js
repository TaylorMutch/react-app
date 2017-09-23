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

            /*
            let config = action.configuration;

            let {initial_conditions_nonspatial_distributions: dist} = config;
            console.log(dist);

            let {currentDefinitions: defs} = state;
            console.log(defs);

            // Lookup veg and stateclass from definitions
            let test = dist[0];
            let strata = defs.strata.find(x => x.id === test.stratum)
            let sc = defs.stateclasses.find(x => x.id === test.stateclass)

            console.log(test);
            console.log(strata);
            console.log(sc);
            */

            return morph(state, {currentConfiguration: action.configuration});
        default:
            return state;
    }
}
