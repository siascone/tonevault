import React, { Component } from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// const Auth = ({ component: Component, path, loggedIn, exact }) => (
//     <Route path={path} exact={exact} render={props => 
//     !loggedIn ? <Component {...props} /> : <Redirect to='/' />}
//     />
// )

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Redirect to='/' /> : <Component {...props} />
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to='/' />
        )}
    />
);

// const SplashFeed = ({ component: Component, path, loggedIn, exact }) => (
//     <Route
//         path={path}
//         exact={exact}
//         render={props => (
//             loggedIn ? <Component {...props} /> : <Splash />
//         )}
//     />
// );

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.currentUser) };
};

export const AuthRoute = withRouter(
    connect(mapStateToProps, null)(Auth)
);

export const ProtectedRoute = withRouter(
    connect(mapStateToProps, null)(Protected)
);

// export const SplashFeedRoute = withRouter(
//     connect(mapStateToProps, null)(SplashFeed)
// );