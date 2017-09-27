
import ProbabilisticTransitionTable from '../components/ProbabilisticTransitionTable'
import { connect } from 'react-redux'

const mapStateToProps = ({scenario, library}) => {
        let { currentDefinitions: defs } = scenario
        let { name } = library
        return { defs, name }
}

export default connect(mapStateToProps)(ProbabilisticTransitionTable)
