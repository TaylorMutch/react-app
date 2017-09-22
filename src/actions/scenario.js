import { get } from '../io'

export const REQUEST_SCENARIO = 'REQUEST_SCENARIO'
export const RECEIVE_SCENARIO = 'RECEIVE_SCENARIO'
export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'

export const requestScenario = () => {
    return {
        type: REQUEST_SCENARIO
    }
}

export const receiveScenario = scenario => {
    return {
        type: RECEIVE_SCENARIO,
        scenario: scenario
    }
}

export const requestProject = () => {
    return {
        type: REQUEST_PROJECT
    }
}

export const receiveProject = project => {
    return {
        type: RECEIVE_PROJECT,
        project: project
    }
}

export const fetchScenarios = () => {
    return (dispatch, getState) => {

        // get the current library and the first project

        //dispatch(requestScenario());
        console.log(getState());
        console.log('Blah!')
        dispatch(receiveScenario('Blah!'));

        /*
        return get('http://127.0.0.1:8000/api/libraries/').then(response => {
                let {status} = response

                if (status >= 200 && status < 300) {
                    return response.json();
                }
                else {
                    throw new Error('Bad status loading libraries: ' + response.status)
                }
            }).then(json => dispatch(receiveAvailableLibraries(json.results))).catch(err => {
                console.log(err)
                dispatch(receiveAvailableLibraries([]))
            })
        */

    }
}
