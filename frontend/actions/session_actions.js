import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const login = user => dispatch => {
    return APIUtil.login(user).then(user => {
        return dispatch(receiveCurrentUser(user))
    })
}

export const signup = user => dispatch => {
    return APIUtil.signup(user).then(user => {
        return dispatch(receiveCurrentUser(user))
    })
}

export const logout = () => dispatch => {
    return APIUtil.logout().then(user => {
        return dispatch(receiveCurrentUser(null))
    })
}