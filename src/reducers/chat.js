import * as types from '../actions/ActionTypes'

const initialState = {
    message: '',
    data: [
        {
            message: 'hello'
        }
    ]
}

function chat (state = initialState, action) {
    if (action.type === types.SET_CHAT_MESSAGE) {
        return {
            ...state,
            message: action.message
        }
    } else if (action.type === types.ADD_CHAT_DATA) {
        return {
            ...state,
            data: [...state.data, action.chat]
        }
    } else {
        return state
    }
}

export default chat