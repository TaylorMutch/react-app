export const EXPAND_WIDGET = 'EXPAND_WIDGET'
export const OPEN_CALLOUT = 'OPEN_CALLOUT'
export const CLOSE_CALLOUT = 'CLOSE_CALLOUT'
export const INITIALIZE_INPUTS = 'INITIALIZE_INPUTS'
export const RESET_INPUTS = 'RESET_INPUTS'

export const expandWidget = widget => {
    return {
        type: EXPAND_WIDGET,
        widget
    }
}

export const openCallout = callout => {
    return {
        type: OPEN_CALLOUT,
        callout
    }
}

export const closeCallout = () => {
    return {
        type: CLOSE_CALLOUT,
    }
}

export const initializeInputs = () => {
    return {
        type: INITIALIZE_INPUTS
    }
}

export const resetInputs = () => {
    return {
        type: RESET_INPUTS
    }
}
