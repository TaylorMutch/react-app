import Library from '../components/Library'
import { connect } from 'react-redux'
import { setLibrary, fetchAvailableLibraries } from '../actions/library'
import { fetchScenarios } from '../actions/scenario'
import { expandWidget, initializeInputs } from '../actions/sidebar'

const mapStateToProps = ({library}) => {

    let { name, availableLibraries } = library

    return {
        name,
        libraries: availableLibraries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => {
            dispatch(fetchAvailableLibraries())
        },
        
        onSetLibrary: name => {
            dispatch(setLibrary(name))
        },

        onLoadLibrary: () => {
            dispatch(initializeInputs())
            dispatch(expandWidget('Initial Vegetation Cover'))
            dispatch(fetchScenarios())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
