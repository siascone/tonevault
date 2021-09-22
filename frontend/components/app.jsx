import React from 'react';
import { Provider } from 'react-redux';

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <header>
                <h1>Tonevault is coming soon...</h1>
            </header>
            {/* <Switch>
                <Route path='/' component={<h2>Cool stuff will go here</h2>}/>
            </Switch> */}
        </div>
    )
}

export default App;