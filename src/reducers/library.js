import {
    REQUEST_AVAILABLE_LIBRARIES, RECEIVE_AVAILABLE_LIBRARIES,
    SET_LIBRARY, LOAD_LIBRARY } from '../actions/library';
import { morph } from '../utils';

const defaultState = {
    currentLibraryName: '',
    availableLibraries: [],
    isFetching: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_AVAILABLE_LIBRARIES:
            return morph(state, {isFetching: true, availableLibraries: []});
        case RECEIVE_AVAILABLE_LIBRARIES:
            return morph(state, {isFetching: false, availableLibraries: action.libraries});
        case SET_LIBRARY:
            console.log(action);
            return morph(state, {currentLibraryName: action.name});
        case LOAD_LIBRARY:
            // TODO - move loading the library to this event, or something that is fired to load it
            return state;
        default:
            return state;
    }
}