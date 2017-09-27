import React from 'react';
import Welcome from '../components/Welcome';
import Library from '../containers/Library';
import VegCoverTable from '../containers/VegCoverTable';
import ProbabilisticTransitionTable from '../containers/ProbabilisticTransitionTable';
import RunControl from '../containers/RunControl';
import RunButton from '../components/RunButton';

class LeftSidebar extends React.Component {

    render() {

        let { scenario } = this.props;

        let scenarioInputs = () => {
            if (scenario) {
                return (
                    <div>
                        <VegCoverTable/>
                        <ProbabilisticTransitionTable/>
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
