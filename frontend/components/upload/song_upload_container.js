import React from 'react';

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { songUpload } from '../../actions/upload_actions'
import SongUpload from './song_upload'

const mapStatetoProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        test: () => window.alert('You\'ve attempted to upload a song. This functionality is on it\'s way.'),
        songUpload: song => dispatch(songUpload(song)),
        openModal: () => dispatch(openModal('Login')) 
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SongUpload);