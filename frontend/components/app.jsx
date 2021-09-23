import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import NavBarContainer from '../components/navbar/navbar_container';
import ModalContainer from '../components/modal/modal'
import Splash from '../components/splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
    
    return (
        <div className='main'>
            <NavBarContainer />
            <ModalContainer />
            <Switch>
                <Route path='/' component={Splash} />
            </Switch>
        </div>
    )
}

export default App;