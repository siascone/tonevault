import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStatetoProps = ({ errors }) => {
    return {
        errors: Object.values(errors.sessionErrors),
        formType: 'Login'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        loginDemoUser: () => dispatch(login({username: 'guest', password: 'password'})),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        modal: (type) => dispatch(openModal(type))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SessionForm)
