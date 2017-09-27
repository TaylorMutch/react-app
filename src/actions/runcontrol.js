export const SET_TIMESTEPS = 'SET_TIMESTEPS'
export const SET_ITERATIONS = 'SET_ITERATIONS'
export const SET_SPATIAL = 'SET_SPATIAL'

export const setTimesteps = timesteps =>  {
    return {
        type: SET_TIMESTEPS,
        timesteps
    }
}

export const setIterations = iterations =>  {
    return {
        type: SET_ITERATIONS,
        iterations
    }
}

export const setSpatial = is_spatial =>  {
    return {
        type: SET_SPATIAL,
        is_spatial
    }
}
