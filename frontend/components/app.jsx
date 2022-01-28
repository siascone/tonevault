import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import NavBarContainer from '../components/navbar/navbar_container';
import ModalContainer from '../components/modal/modal'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from '../components/splash/splash'
import Logout from '../components/logout/logout'
import Discover from './discover/discover';
import SplashContainer from './splash/splash_container';


const App = () => {
    
    return (
        <div className='main'>
            <NavBarContainer />
            <ModalContainer />
            <Switch>
                <Route exact path='/logout' component={Logout} />
                <ProtectedRoute exact path='/discover' component={Discover} />
                <Route exact path='/' component={SplashContainer} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default App;