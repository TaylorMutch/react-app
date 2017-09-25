import { combineReducers } from 'redux'
import error from './error'
import library from './library'
import scenario from './scenario'
import sidebar from './sidebar'

export default combineReducers({
    error,
    library,
    scenario,
    sidebar,
})
