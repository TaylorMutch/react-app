import StateClassTable from '../components/StateClassTable';
import { connect } from 'react-redux';

const mapStateToProps = ({scenario}) => {

    let { currentDefinitions } = scenario
    let { stateclasses } = currentDefinitions
    
    return {
        stateclasses
    }
}

/*
const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => {
            dispatch(fetchAvailableLibraries());
        },
        
        onSetLibrary: name => {
            dispatch(setLibrary(name));
        },

        onLoadLibrary: () => {
            dispatch(fetchScenarios());
        }
    }
}
*/

//export default connect(mapStateToProps, mapDispatchToProps)(StateClassTable)
export default connect(mapStateToProps)(StateClassTable)
