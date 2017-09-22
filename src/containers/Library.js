import Library from '../components/Library';
import { connect } from 'react-redux';
import { setLibrary, loadLibrary, fetchAvailableLibraries } from '../actions/library';

const mapStateToProps = ({library}) => {

    let { currentLibraryName, availableLibraries } = library;

    return {
        name: currentLibraryName,
        libraries: availableLibraries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => {
            dispatch(fetchAvailableLibraries());
        },
        
        onSetLibrary: name => {
            dispatch(setLibrary(name));
        },

        onLoadLibrary: name => {
            dispatch(loadLibrary());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
