import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import StateClassTable from '../components/StateClassTable'
import { getRGB } from '../utils'

const VegSlider = ({veg, distribution, disabled}) => {

    // TODO Consider having the legend as a separate componenent
        
    let { name, color } = veg
    let total = parseInt(distribution.map(x => x.relative_amount).reduce((a, b) => a + b))
    let rgb = getRGB(color)
    return (
        <tr>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan='4'>
                                <div className='scene_legend_color_initial_vegetation_cover' style={{backgroundColor: rgb}}></div>
                                <label htmlFor="amount_veg1">
                                    <div className='imageOverlayLink'>
                                        {name}
                                    </div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Slider
                                className='slider_bars veg_slider_bars'
                                //disabled={disabled}
                                defaultValue={total}
                                onChange={e => {
                                    console.log('onChange')
                                    console.log(e)
                                    }}
                                onBeforeChange={e => {
                                    console.log('onBeforeChange')
                                    console.log(e)
                                    }}
                                onAfterChange={e => {
                                    console.log('onAfterChange')
                                    console.log(e)
                                    }}
                                />
                            </td>
                            <td>
                                <input type='text'  className='current_slider_setting' value={String(total) + '%'} readOnly />
                            </td>
                            <td>
                                <div className='show_state_classes_link state_class_div'>
                                    <span className='state_class_span'>
                                        State Classes
                                    </span>
                                </div>
                            </td>
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

export default VegSlider;
