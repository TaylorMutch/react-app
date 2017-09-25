import VegCoverTable from '../components/VegCoverTable';
import { connect } from 'react-redux';

const mapStateToProps = ({scenario}) => {

    let { currentDefinitions, currentScenario, currentConfiguration } = scenario

    return {
        defs: currentDefinitions,
        scenario: currentScenario,
        config: currentConfiguration
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

//export default connect(mapStateToProps, mapDispatchToProps)(VegCoverTable)
export default connect(mapStateToProps)(VegCoverTable)
