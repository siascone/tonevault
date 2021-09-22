import { connect } from 'react-redux';

import { logout, signup, login } from '../../util/session_api_util';
import NavBar from './navbar'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: () => alert("We're sorry, signup functionality does not yet work"),
        login: () => alert("We're sorry, Sign in functionality does not yet work"),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)