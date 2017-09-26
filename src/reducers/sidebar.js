import { EXPAND_WIDGET, OPEN_CALLOUT, CLOSE_CALLOUT, INITIALIZE_INPUTS, RESET_INPUTS } from '../actions/sidebar'
import { morph } from '../utils'

const defaultState = {
    initialized: false,
    left: '',
    callout: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case EXPAND_WIDGET:
            return morph(state, {left: action.widget})
        case OPEN_CALLOUT:
            return morph(state, {callout: action.callout})
        case CLOSE_CALLOUT:
            return morph(state, {callout: null})
        case INITIALIZE_INPUTS:
            return morph(state, {initialized: true})
        case RESET_INPUTS:
            return morph(state, {initialized: false})
        default:
            return state
    }
}
