import { SELECT_TAB } from '../actions/tabs'

export default (state = 'about', action) => {
    switch (action.type) {
        case SELECT_TAB:
            return action.tab
        default:
            return state
    }
}
