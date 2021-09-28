import React from 'react';

import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignupFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;

    switch(modal) {
        case "Signup":
            component = <SignupFormContainer />
            break
        case "Login":
            component = <LoginFormContainer />
            break
        default:
            return null;
    };
    
    return (
        <div className="modal-wrapper">
            <button className='modal-wrapper-close' onClick={closeModal}>X</button>
            {component}
        </div>
    )
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