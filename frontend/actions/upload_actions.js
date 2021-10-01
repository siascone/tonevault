import * as UploadAPIUtil from '../util/songs_api_util';

export const UPLOAD_SONG = 'UPLOAD_SONG';
export const RECEIVE_UPLOAD_ERORRS = 'RECEIVE_UPLOAD_ERRORS';

const uploadSong = song => {
    return {
        type: UPLOAD_SONG,
        song
    }
}

const receiveUploadErrors = errors => {
    return {
        type: RECEIVE_UPLOAD_ERORRS,
        errors
    }
}

export const songUpload = song => dispatch => {
    return UploadAPIUtil.upload(song)
        .then(song => dispatch(uploadSong(song)),
        (errors) => dispatch(receiveUploadErrors(errors)));
};