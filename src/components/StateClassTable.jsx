import React from 'react'
import { getRGB } from '../utils'

class StateClassTable extends React.Component {

    render() {

        let { veg, distribution, stateclasses, onClose } = this.props

        let canRender = veg !== null && distribution !== null && stateclasses !== null

        if (!canRender) return

        let rows = () => {
            
            return distribution.map(x => {
                let sc = stateclasses.find(y => y.id === x.stateclass)
                let legendStyle = {'backgroundColor': getRGB(sc.color), 'borderRadius': '3px'}
                return (
                    <tr key={x.stateclass}>
                        <td>
                            <div className='scene_legend_color_initial_vegetation_cover' style={legendStyle}></div>
                        </td>
                        <td>
                            {sc.name}
                        </td>
                        <td>
                            <input className='veg_state_class_entry' type='text' size='2' defaultValue={x.relative_amount}/>%
                        </td>
                    </tr>
                )
            })
        }

        return (
            <table className='sub_slider_table' title={veg.name}>
                <tbody>
                    <tr>
                        <td colSpan='3'>
                            <div className='state_class_header'>
                                {veg.name}
                                <img className='close_state_class' src="static/img/close.png" alt=""
                                onClick={onClose}/>
                            </div>
                        </td>
                    </tr>
                    {rows()}
                </tbody>
            </table>
        )
    }
}

export default StateClassTable
