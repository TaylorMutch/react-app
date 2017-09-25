import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftSidebar from '../containers/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

class App extends React.Component {
    render() {

    // decide which ones need to render and should render
    // need to talk to the store here
    
    return (
        <div>
            <Header/>  
            <LeftSidebar/>
            <RightSidebar/>
            <Footer/>
        </div>    
    )
    }
}

export default App;
