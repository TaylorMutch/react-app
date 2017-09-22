import LeftSidebar from '../components/LeftSidebar';
import { connect } from 'react-redux';

const mapStateToProps = ({scenario}) => {

    let { currentScenario } = scenario;

    return {
        scenario: currentScenario
    }
}


export default connect(mapStateToProps)(LeftSidebar)
