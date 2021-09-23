import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import NavBarContainer from '../components/navbar/navbar_container';
import Modal from '../components/modal/modal'
import Splash from '../components/splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
    
    return (
        <div className='main'>
            <NavBarContainer />
            <Modal />
            <Switch>
                
            </Switch>
        </div>
    )
}

export default App;