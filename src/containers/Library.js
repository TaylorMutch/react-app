import Library from '../components/Library';
import { connect } from 'react-redux';
import { setLibrary, loadLibrary } from '../actions/library';

const mapStateToProps = ({libraryName}) => {
    return {
        name: libraryName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetLibrary: name => {
            dispatch(setLibrary(name));
        },

        onLoadLibrary: name => {
            dispatch(loadLibrary());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
