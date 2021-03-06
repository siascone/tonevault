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

// const Logout = ({ component: Component, path, loggedIn, exact }) => (
//     <Route
//         path={path}
//         exact={exact}
//         render={props => (
//             !loggedIn ? <Component {...props} /> : <Redirect to='/discover' />
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

// export const LogoutRoute = withRouter(
//     connect(mapStateToProps, null)(Logout)
// );