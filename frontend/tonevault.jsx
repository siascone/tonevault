import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser}};
        store = configureStore(preloadedState);
        delete window.currentUser
    } else {
        store = configureStore();
    }
    
    window.store = store;
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    const root = document.querySelector('#root');
    ReactDOM.render(<Root store={store} />, root)
});