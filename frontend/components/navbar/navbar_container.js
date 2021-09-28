import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout, signup, login } from '../../actions/session_actions';
import NavBar from './navbar'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        modalType: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: modalType => dispatch(openModal(modalType)),
        logout: () => dispatch(logout())
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)