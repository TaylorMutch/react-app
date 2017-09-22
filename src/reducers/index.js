import { combineReducers } from 'redux'
//import auth from './auth'
//import runConfiguration, { lastRun, activeStep, reportIsFetching } from './runConfiguration'
//import report from './report'
//import { activeVariable } from './variables'
//import map from './map'
//import job from './job'
//import saves from './saves'
//import legends from './legends'
import error from './error'
import library from './library'
import scenario from './scenario'
//import popup from './popup'

export default combineReducers({
    //isLoggedIn: auth,
    library,
    scenario,
    //activeVariable,
    //activeStep,
    //runConfiguration,
    //lastRun,
    //map,
    //job,
    //saves,
    //legends,
    //reportIsFetching,
    //report,
    error,
    //popup
})
