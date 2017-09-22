import { SET_LIBRARY, LOAD_LIBRARY } from '../actions/library';
import { morph } from '../utils';

const defaultState = {
    libraryName: 'Select A Library'
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_LIBRARY:
            console.log(action);
            return morph(state, {libraryName: action.name});
        case LOAD_LIBRARY:
            // TODO - move loading the library to this event, or something that is fired to load it
            return state;
        default:
            return state;
    }
}