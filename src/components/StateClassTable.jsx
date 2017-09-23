import React from 'react'

const StateClassTable = () => {
    return (
        <table className='sub_slider_table' title='Veg Type'>
            <tbody>
                <tr>
                    <td colSpan='3'>
                        <div className='state_class_header'>
                            Vegetation Type
                            <img className='close_state_class' src="static/img/close.png" alt=""/>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default StateClassTable;
