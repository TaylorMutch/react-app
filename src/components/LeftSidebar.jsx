import React from 'react';
import Welcome from '../components/Welcome';
import Library from '../containers/Library';
import VegCover from '../components/VegCover';
import ProbabilisticTransition from '../components/ProbabilisticTransition';
import RunControl from '../components/RunControl';
import RunButton from '../components/RunButton';

class LeftSidebar extends React.Component {

    render() {

        let { scenario } = this.props;

        let optional = () => {
            if (scenario) {
                return (
                    <div>
                        <VegCover/>
                        <ProbabilisticTransition/>
                        <RunControl/>
                        <RunButton/>
                    </div>
                )
            }
        }

        return (
            <div id='left'>
                <Welcome/>
                <Library/>
                {optional()}
            </div>
        )
    }
}

export default LeftSidebar;
