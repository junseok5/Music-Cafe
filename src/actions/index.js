import * as types from './ActionTypes'

export function setCurrentVideoId (videoId) {
    return {
        type: types.SET_CURRENT_VIDEOID,
        videoId
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

export function setChatMessage (message) {
    return {
        type: types.SET_CHAT_MESSAGE,
        message
    }
}