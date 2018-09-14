import * as types from '../actions/ActionTypes'

const initialState = {
    selectedPLKey: 0,
    selectedMLKey: 0,
    currentVideoId: 'TNWMZIf7eSg',
    playList: [
        {
            title: '최신곡',
            musicList: [
                {
                    title: '사이렌',
                    singer: '선미',
                    videoId: 'TNWMZIf7eSg'
                },
                {
                    title: 'IDOL',
                    singer: '방탄소년단',
                    videoId: 'pBuZEGYXA6E'
                },
                {
                    title: 'Way Back Home',
                    singer: '숀',
                    videoId: 'YPqDMRJ0lBk'
                },
                {
                    title: 'I\'m Fine',
                    singer: '방탄소년단',
                    videoId: 'tGVjM8b3Xwo'
                },
                {
                    title: '모든 날, 모든 순간',
                    singer: '폴킴',
                    videoId: '9II_GQJ7mKo'
                }
            ]
        },
        {
            title: 'M.C the max',
            musicList: [
                {
                    title: 'My Way',
                    singer: 'M.C the max',
                    videoId: 'PDUgp7sWHr4'
                },
                {
                    title: '어디에도',
                    singer: 'M.C the max',
                    videoId: 'va5rf20Un24'
                },
                {
                    title: '이 밤이 지나기 전에',
                    singer: 'M.C the max',
                    videoId: 'vBsUqt0gnk8'
                },
                {
                    title: '그 때 우리',
                    singer: 'M.C the max',
                    videoId: 'rVO1cDdPB9c'
                }
            ]
        }
    ]
}

function youtube_video (state = initialState, action) {
    if (action.type === types.SET_CURRENT_VIDEOID) {
        return {
            ...state,
            currentVideoId: action.videoId
        }
    } else if (action.type === types.SET_SELECTEDPLKEY) {
        return {
            ...state,
            selectedPLKey: action.key
        }
    } else if (action.type === types.SET_SELECTEDMLKEY) {
        return {
            ...state,
            selectedMLKey: action.key
        }
    } else {
        return state
    }
}

export default youtube_video