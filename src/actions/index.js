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