import { REQUEST_AVAILABLE_LIBRARIES, RECEIVE_AVAILABLE_LIBRARIES, SET_LIBRARY } from '../actions/library';
import { morph } from '../utils';

const defaultState = {
    name: '',
    availableLibraries: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_AVAILABLE_LIBRARIES:
            return morph(state, {availableLibraries: []});
        case RECEIVE_AVAILABLE_LIBRARIES:
            return morph(state, {availableLibraries: action.libraries});
        case SET_LIBRARY:
            return morph(state, {name: action.name});
        default:
            return state;
    }
}