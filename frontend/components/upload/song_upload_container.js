import React from 'react';

import { connect } from 'react-redux';
import { songUpload } from '../../actions/upload_actions'

const mapStatetoProps = (state) => {
    return {
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        test: () => window.alert('You\'ve attempted to upload a song. This functionality is on it\'s way.'),
        songUpload: song => dispatch(songUpload(song))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SessionForm)