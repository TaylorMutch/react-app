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

export default connect(mapStateToProps)(VegCoverTable)
