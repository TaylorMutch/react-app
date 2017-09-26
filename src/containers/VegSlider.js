import { connect } from 'react-redux'
import VegSlider from '../components/VegSlider'
import { openCallout, closeCallout } from '../actions/sidebar'

const mapStateToProps = ({sidebar}) => {

    let { callout } = sidebar

    return {
        callout
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenCallout: (vegId) => {
            console.log(vegId)
            dispatch(openCallout(vegId))
        },
        
        onCloseCallout: () => {
            dispatch(closeCallout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VegSlider)
