import * as types from '../actions/ActionTypes'

const initialState = {
    data: []
}

function chat (state = initialState, action) {
    if (action.type === types.SET_CHAT_MESSAGE) {
        return {
            ...state,
            data: [...state.data, action.message]
        }
    } else {
        return state
    }
}

export default chat