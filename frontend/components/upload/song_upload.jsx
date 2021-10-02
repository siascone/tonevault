import React from 'react';
import { withRouter } from 'react-router-dom'

class SongUpload extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { currentUser, songUpload, openModal } = this.props
        let uploadPage;

        if (currentUser) {
            uploadPage = <div>
                This is an upload page for logged in users
            </div>
        } else {
            uploadPage = <div>
                This is an upload page for users who have not logged in
                <div>
                    <button onClick={openModal}>Upload your first track</button>
                </div>
            </div>
        }
        
        return (
            <div>
                {uploadPage}
            </div>
        )
    }
}

export default withRouter(SongUpload);