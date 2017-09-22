import React from 'react';

import Legend from '../components/Legend';
import Results from '../components/Results';

class RightSidebar extends React.Component {

    render() {

        return (
            <div id='right'>
                <Legend/>
                <div id='output'>
                    <div id="model_results_header" className="right_header">
                        Model Results
                        <img className="collapse_icon rotate90" src="static/img/collapse_down_arrow.png" alt=''/>
                    </div>
                    <Results/>
                </div>
            </div>
        )
    }
}

export default RightSidebar;





