import { EXPAND_WIDGET, INITIALIZE_INPUTS, RESET_INPUTS } from '../actions/sidebar'
import { morph } from '../utils'

const defaultState = {
    initialized: false,
    left: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case EXPAND_WIDGET:
            return morph(state, {left: action.widget})
        case INITIALIZE_INPUTS:
            return morph(state, {initialized: true})
        case RESET_INPUTS:
            return morph(state, {initialized: false})
        default:
            return state
    }
}
