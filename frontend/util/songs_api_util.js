export const upload = song => {
    return $.ajax({
        url: '/api/songs',
        method: 'POST',
        data: {song}
    })
}

export const fetchSong = songId => {
    return $.ajax({
        url: `api/songs/${songId}`,
        method: 'GET'
    })
}

export const fetchAllSongs = () => {
    return $.ajax({
        url: `api/songs`,
        method: 'GET'
    })
}