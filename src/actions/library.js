import { get } from '../io'

export const REQUEST_AVAILABLE_LIBRARIES = 'REQUEST_AVAILABLE_LIBRARIES'
export const RECEIVE_AVAILABLE_LIBRARIES = 'RECEIVE_AVAILABLE_LIBRARIES'
export const SET_LIBRARY = 'SET_LIBRARY'

export const requestAvailableLibraries = () => {
    return {
        type: REQUEST_AVAILABLE_LIBRARIES
    }
}

export const receiveAvailableLibraries = libraries => {
    return {
        type: RECEIVE_AVAILABLE_LIBRARIES,
        libraries: libraries
    }
}

export const setLibrary = (name) => {

    // TODO - Do we need to send some map events based on the config?

    return {
        type: SET_LIBRARY,
        name
    }
}

export const fetchAvailableLibraries = () => {
    return (dispatch, getState) => {

        dispatch(requestAvailableLibraries());

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

    }
}
