import React from 'react'
import StateClassTable from '../components/StateClassTable'


class VegSlider extends React.Component {

    // TODO -  create colormasp
    // TODO - style={{backgroundColor: 'green'}} with a colormap color
    // Consider having the legend as a separate componenent

    // ADD  id='veg" + veg_id + "_label' to the slider input

    render() {

        return (
        <tr>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan='4'>
                                <div className='scene_legend_color_initial_vegetation_cover' style={{backgroundColor: 'green'}}></div>
                                <label htmlFor="amount_veg1">
                                    <div className='imageOverlayLink'></div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='slider_bars veg_slider_bars'></div>
                            </td>
                            <td>
                                <input type='text'  className='current_slider_setting' readOnly />
                            </td>
                            <div className='show_state_classes_link state_class_div'>
                                <span className='state_class_span'>
                                    State Classes
                                </span>
                            </div>
                            <td>
                            <div className='sub_slider_text_inputs' style={{display: 'none'}}>
                                <div className='callout right'>
                                    <StateClassTable/>
                                </div>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        )
    }
}

export default VegSlider;
