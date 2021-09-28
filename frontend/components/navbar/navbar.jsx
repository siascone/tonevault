import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
        const signup = 'Signup';
        const login = 'Login';
        let greeting;

        if (currentUser) {
            greeting = <div className='greeting-logged-in'>
                <p className='greeting-message'>Welcome, {currentUser.username}</p>
                <button className="logout" onClick={ this.handleLogout }>Logout</button>
            </div>
        } else {
            greeting = <div className='greeting-logged-out'>
                <button className="login" name='Login' onClick={e => openModal(e.currentTarget.name)}>Sign in</button>
                <button className="signup" name='Signup' onClick={e => openModal(e.currentTarget.name)}>Create Account</button>
            </div>
        }

        return (
            <div className='navbar'>
                <Link className='logo-link' to='/'>
                    <div className="nav-left">
                        <p>TONEVAULT</p>
                    </div>
                </Link>
                <div className="nav-right">
                    {greeting}
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar);