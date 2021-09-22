import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import NavBarContainer from '../components/navbar/navbar_container';

const App = () => {
    return (
        <div>
            <header>
                <NavBarContainer />
            </header>
            {/* <Switch>
                <Route path='/' component={<h2>Cool stuff will go here</h2>}/>
            </Switch> */}
        </div>
    )
}

export default App;