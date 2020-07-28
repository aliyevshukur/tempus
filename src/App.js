import React, { Component } from 'react'
import { RootNavigation } from './navigation/RootNavigation';
import { HeaderNavigation } from './components/HeaderNavigation/HeaderNavigation';

import './reset.css';


class App extends Component {

    render() {
        return (
            <div className={"App"}>
                <HeaderNavigation />
                <RootNavigation />
            </div>
        )
    }
}

export default App;