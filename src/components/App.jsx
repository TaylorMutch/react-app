import React from 'react';
import WelcomeWidget from '../components/WelcomeWidget';
import LibraryWidget from '../components/LibraryWidget';
import VegCoverWidget from '../components/VegCoverWidget';
import ProbabilisticTransitionWidget from '../components/ProbabilisticTransitionWidget';
import RunControlWidget from '../components/RunControlWidget';
import RunButton from '../components/RunButton';

class App extends React.Component {
  render() {

    // decide which ones need to render and should render
    // need to talk to the store here

    return (
      <div>
        <WelcomeWidget></WelcomeWidget>
        <LibraryWidget></LibraryWidget>
        <VegCoverWidget></VegCoverWidget>
        <ProbabilisticTransitionWidget></ProbabilisticTransitionWidget>
        <RunControlWidget></RunControlWidget>
        <RunButton></RunButton>
      </div>
    )
  }
}

export default App;
