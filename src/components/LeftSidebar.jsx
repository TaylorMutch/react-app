import React from 'react';
import Welcome from '../components/Welcome';
import Library from '../containers/Library';
import VegCover from '../components/VegCover';
import ProbabilisticTransition from '../components/ProbabilisticTransition';
import RunControl from '../components/RunControl';
import RunButton from '../components/RunButton';

class LeftSidebar extends React.Component {

    render() {

        return (
            <div id='left'>
                <Welcome/>
                <Library/>
                <VegCover/>
                <ProbabilisticTransition/>
                <RunControl/>
                <RunButton/>
            </div>
        )
    }
}

export default LeftSidebar;
