import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import Library from '../containers/Library';
import VegCover from '../components/VegCover';
import ProbabilisticTransition from '../components/ProbabilisticTransition';
import RunControl from '../components/RunControl';
import RunButton from '../components/RunButton';
import Legend from '../components/Legend';
import Results from '../components/Results';

class App extends React.Component {
    render() {

    // decide which ones need to render and should render
    // need to talk to the store here
    
    return (
        <div>
            <Header/>  
                <div id='left'>
                    <Welcome/>
                    <Library/>
                    <VegCover/>
                    <ProbabilisticTransition/>
                    <RunControl/>
                    <RunButton/>
                </div>
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
            <Footer/>
            </div>
        )
    }
}

export default App;
