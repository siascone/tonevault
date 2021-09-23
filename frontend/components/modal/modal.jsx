import React from 'react';

import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignupFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

function Modal({ modal }) {
    if (!modal) {
        return null;
    }

    let component;

    switch(modal) {
        case "signup":
            component = <SignupFormContainer />
            break
        case "login":
            component = <LoginFormContainer />
            break
        default:
            return null;
    };

    return <div className="modal-wrapper">{component}</div>

};

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)