import * as types from './ActionTypes'

// youtube video

export function setCurrentVideoId (videoId) {
    return {
        type: types.SET_CURRENT_VIDEOID,
        videoId
    }
}

export function setPrevPLKey (key) {
    return {
        type: types.SET_PREV_PLKEY,
        key
    }
}

export function setSelectedPLKey (key) {
    return {
        type: types.SET_SELECTEDPLKEY,
        key
    }
}

export function setSelectedMLKey (key) {
    return {
        type: types.SET_SELECTEDMLKEY,
        key
    }
}

export function setSelectedKey (key, target) {
    return {
        type: types.SET_SELECTED_KEY,
        target,
        key
    }
}

export function controlModal (openModal, modeModal = -1) {
    if (modeModal === -1) {
        return {
            type: types.CONTROL_MODAL,
            openModal
        }
    } else {
        return {
            type: types.CONTROL_MODAL,
            openModal,
            modeModal
        }
    }
}

export function addPlayList (playList) {
    return {
        type: types.ADD_PLAY_LIST,
        playList
    }
}

export function addMusic (music) {
    return {
        type: types.ADD_MUSIC,
        music
    }
}

export function setPlayListTitle (title) {
    return {
        type: types.SET_PLAY_LIST_TITLE,
        title
    }
}

export function setMusicVideoId (videoId) {
    return {
        type: types.SET_MUSIC_VIDEOID,
        videoId
    }
}

export function setMusicTitle (title) {
    return {
        type: types.SET_MUSIC_TITLE,
        title
    }
}

export function setMusicSinger (singer) {
    return {
        type: types.SET_MUSIC_SINGER,
        singer
    }
}

// chat

export function setChatMessage (message) {
    return {
        type: types.SET_CHAT_MESSAGE,
        message
    }
}

export function addChatData (chat) {
    return {
        type: types.ADD_CHAT_DATA,
        chat
    }
}