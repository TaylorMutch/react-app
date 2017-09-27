import RunControl from '../components/RunControl'
import { connect } from 'react-redux'
import { setTimesteps, setIterations, setSpatial } from '../actions/runcontrol'

const mapStateToProps = ({scenario}) => {

    let { currentConfiguration } = scenario
    
    if (!currentConfiguration) return {}

    let { run_control } = currentConfiguration
    let { max_timestep: timesteps, max_iteration: iterations, is_spatial: isSpatial } = run_control

    return {
        timesteps,
        iterations,
        isSpatial
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTimestep: timesteps => {
            dispatch(setTimesteps(timesteps))
        },
        
        onIteration: iterations => {
            dispatch(setIterations(iterations))
        },

        onSpatial: spatial => {
            dispatch(setSpatial(spatial))
            //console.log(spatial)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RunControl)
