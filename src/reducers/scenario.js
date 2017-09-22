import {
    REQUEST_SCENARIO, RECEIVE_SCENARIO,
    REQUEST_PROJECT, RECEIVE_PROJECT
} from '../actions/scenario';
import { morph } from '../utils';

const defaultState = {
    currentScenario: null,
    currentProject: null,
    isFetching: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_SCENARIO:
            return morph(state, {isFetching: true, currentScenario: null});
        case RECEIVE_SCENARIO:
            return morph(state, {isFetching: false, currentScenario: action.scenario});
        case REQUEST_PROJECT:
            return morph(state, {isFetching: true, currentProject: null});
        case RECEIVE_PROJECT:
            return morph(state, {isFetching: false, currentProject: action.project});
        default:
            return state;
    }
}
