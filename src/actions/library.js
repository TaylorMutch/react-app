export const SET_LIBRARY = 'SET_LIBRARY'
export const LOAD_LIBRARY = 'LOAD_LIBRARY'
export const RESET_LIBRARY = 'RESET_LIBRARY'

export const setLibrary = (name) => {
    return {
        type: SET_LIBRARY,
        name
    }
}

export const loadLibrary = () => {
    return {
        type: LOAD_LIBRARY
    }
}

export const resetLibrary = () => {
    return {
        type: RESET_LIBRARY
    }
}
