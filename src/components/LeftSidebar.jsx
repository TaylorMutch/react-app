import React from 'react';
import Welcome from '../components/Welcome';
import Library from '../containers/Library';
import VegCoverTable from '../containers/VegCoverTable';
import ProbabilisticTransition from '../components/ProbabilisticTransition';
import RunControl from '../components/RunControl';
import RunButton from '../components/RunButton';

class LeftSidebar extends React.Component {

    render() {

        let { scenario } = this.props;

        let scenarioInputs = () => {
            if (scenario) {
                return (
                    <div>
                        <VegCoverTable/>
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
                {scenarioInputs()}
            </div>
        )
    }
}

export default LeftSidebar;
