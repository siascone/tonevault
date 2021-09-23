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
            .then(() => this.props.closeModal());
        // this.props.closeModal()

    };

    guestLogin(e) {
        e.preventDefault();
        this.props.loginDemoUser()
            .then(() => this.props.closeModal());
        // this.props.closeModal();
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
        debugger;
        let fields;
        
        if (this.props.formType === 'signup') {
            fields = <div className='session-form-fields'>
                <label id="username">
                    <input
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
                <br />
                <label id="email">
                    <input
                        type="text"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                </label>
                <br />
                <label id="password">
                    <input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>
                <br />
            </div>
        } else {
            fields = <div className='session-form-fields'>
                <label id="username">
                    <input
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
                <br />
                <label id="password">
                    <input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.update('password')}
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
                {this.renderErrors()}
            </div>
        )
    }
};

export default withRouter(SessionForm);