import React from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
        this.props.history.push('/logout');
    }

    render() {

        const { currentUser, openModal, logout } = this.props;
        const signup = 'signup';
        const login = 'login';
        let greeting;

        if (currentUser) {
            greeting = <div className='greeting-logged-in'>
                <p>Welcome {currentUser.username}</p>
                <button className="logout" onClick={ this.handleLogout }>Logout</button>
            </div>
        } else {
            greeting = <div className='greeting-logged-out'>
                <button className="login" name='login' onClick={e => openModal(e.currentTarget.name)}>Sign in</button>
                <button className="signup" name='signup' onClick={e => openModal(e.currentTarget.name)}>Create Account</button>
            </div>
        }

        return (
            <div className='navbar'>
                <div className="nav-left">
                    <p>TONEVAULT</p>
                </div>
                <div className="nav-right">
                    {greeting}
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar);