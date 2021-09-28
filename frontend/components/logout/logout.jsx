import React from 'react';

class Logout extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='logout-main'>
                <h1>You have logged out!</h1>
            </div>
        );
    };
};

export default Logout;