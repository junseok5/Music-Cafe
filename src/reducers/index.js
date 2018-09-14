import { combineReducers } from 'redux'
import youtube_video from './youtube_video'
import chat from './chat'

const reducers = combineReducers({
    youtube_video,
    chat
})

export default reducers