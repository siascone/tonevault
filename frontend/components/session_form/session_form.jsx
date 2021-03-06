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
        this.renderErrors = this.renderErrors.bind(this);
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
        // debugger

        let fields;
        let required;
        let emailErrorLabel, 
        usernameErrorLabel, 
        passwordErrorLabel, 
        loginErrorsLabel,
        usernameTakenLabel,
        emailTakenLabel = <label></label>;

        let failedLogin

        if (this.props.errors.length) {
            required = 'required';
            this.props.errors.forEach(error => {
                if (error === 'Username can\'t be blank') {
                    usernameErrorLabel = <label forHtml='username' className="error-message">Username can't be blank</label>
                }

                if (error === 'Username has already been taken') {
                    usernameTakenLabel = <label forHtml='username' className="error-message">That username has already been taken</label>
                }

                if (error === 'Email can\'t be blank') {
                    emailErrorLabel = <label forHtml='email' className="error-message">Email can't be blank</label>
                }

                if (error === 'Email has already been taken') {
                    emailTakenLabel = <label forHtml='email' className="error-message">That email has already been used</label>
                }

                if (error === 'Password is too short (minimum is 6 characters)') {
                    passwordErrorLabel = <label forHtml='password' className="error-message">Password is too short, the minimum is 6 characters</label>
                }

                if (error === 'Invalid username/passowrd combination') {
                    loginErrorsLabel = <label forHtml='password' className="error-message">Enter a valid username and passowrd combination</label>
                    failedLogin = 'failed-login'
                }

            })
        }
        
        if (this.props.formType === 'Signup') {
            fields = <div className='session-form-fields'>
                
                <input
                    id="username"
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className={required}
                    required
                />
                {usernameErrorLabel}
                {usernameTakenLabel}
                
                <input
                    id="email"
                    type="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className={required}
                    required
                />
                {emailErrorLabel}
                {emailTakenLabel}
                
                <input
                    id="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className={required}
                    required
                />
                {passwordErrorLabel}
            </div>
        } else {
            fields = <div className='session-form-fields'>
                <label forHtml="username"></label>
                <input
                    id="username"
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className={`${required} ${failedLogin}`}
                    required
                />
                
                <input
                    id="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className={`${required} ${failedLogin}`}
                    required
                />
                {loginErrorsLabel}
                
            </div>
        }

        

        return (
            <div className='modal'>
                <form className='session-form' onSubmit={this.handleSubmit} noValidate>
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
                {/* {this.renderErrors()} */}
            </div>
        )
    }
};

export default withRouter(SessionForm);