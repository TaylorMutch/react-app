import InputWidget from '../components/InputWidget'
import { connect } from 'react-redux'
import { expandWidget } from '../actions/sidebar'

const mapStateToProps = ({sidebar}) => {

    let { left, initialized } = sidebar;
    return {
        active: left,
        initialized
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onExpand: name => {
            dispatch(expandWidget(name))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputWidget)
