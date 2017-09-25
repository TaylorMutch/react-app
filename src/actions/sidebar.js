export const EXPAND_WIDGET = 'EXPAND_WIDGET'
export const INITIALIZE_INPUTS = 'INITIALIZE_INPUTS'
export const RESET_INPUTS = 'RESET_INPUTS'

export const expandWidget = widget => {
    return {
        type: EXPAND_WIDGET,
        widget
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
