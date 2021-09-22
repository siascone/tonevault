import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { currentUser, signup, login, logout } = this.props
        let greeting
        if (currentUser) {
            greeting = <div className='greeting-logged-in'>
                <p>Welcome {currentUser.username}</p>
                <button onClick={ logout }>Logout</button>
            </div>
        } else {
            greeting = <div className='greeting-logged-out'>
                <button onClick={login}>Sign in</button>
                <button onClick={signup}>Create Account</button>
            </div>
        }

        return (
            <div className='navbar'>
                <div className="nav-left">
                    Tonevault
                </div>
                <div className="nav-right">
                    {greeting}
                </div>
            </div>
        )
    }
}

export default Navbar;