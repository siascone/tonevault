import { UPLOAD_SONG } from "../actions/upload_actions";

const songsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = {...state}

    switch(action.type) {
        case UPLOAD_SONG:
            newState[action.song.id] = action.song
        default:
            return state
    }
}

export default songsReducer