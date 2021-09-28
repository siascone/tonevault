import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.guestLogin = this.guestLogin.bind(this);
    };

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value});
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.closeModal())
            .then(() => this.props.history.push('/discover'));
            
        // this.props.history.push('/discover')

    };

    guestLogin(e) {
        e.preventDefault();
        this.props.loginDemoUser()
            .then(() => this.props.closeModal())
            .then(() => this.props.history.push('/discover'));

        // this.props.history.push('/discover')
    }

    renderErrors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <li key={`error ${i}`}>{error}</li>
                ))}
            </div>
        )
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        // debugger;
        let fields;
        
        if (this.props.formType === 'Signup') {
            fields = <div className='session-form-fields'>
                <label>
                    <input
                        id="username"
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.update('username')}
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        id="email"
                        type="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.update('email')}
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        id="password"
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        required
                    />
                </label>
                <br />
            </div>
        } else {
            fields = <div className='session-form-fields'>
                <label>
                    <input
                        id="username"
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.update('username')}
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        id="password"
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        required
                    />
                </label>
                <br />
            </div>
        }

        return (
            <div className='modal'>
                <form className='session-form' onSubmit={this.handleSubmit}>
                    {fields}
                    <button className="session-form-submit" 
                        type='submit'>
                            {this.props.formType}
                    </button>
                    <br />
                    <button className='session-form-submit guest-login' 
                        onClick={this.guestLogin}>
                            Guest Login
                    </button>
                </form>
                <p className='session-notice'>
                    We will not use your email and devices information for updates and tips
                    on Tonevault's products and services, nor for activity notifications.
                    There is currently nothing to unsubscribe from so, no need to worry.
                </p>
                <br />
                <p className='session-notice'>
                    We also won't use the information you provid to
                    target adds as not described in our non existant Privacy Policy.
                </p>
                {this.renderErrors()}
            </div>
        )
    }
};

export default withRouter(SessionForm);