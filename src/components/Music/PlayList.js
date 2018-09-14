import React, { Component } from 'react'
// import styles from './PlayList.scss'
// import classNames from 'classnames/bind'
import cx from 'classnames'
import PlayInfo from './PlayInfo'
import MusicInfo from './MusicInfo'

import { connect } from 'react-redux'
import * as actions from '../../actions'

// const cx = classNames.bind(styles)

class PlayList extends Component {

    constructor (props) {
        super(props)
        this.state = {
            selectedPLKey: 0,
            selectedMLKey: 0
        }

        this.selectPlayList = this.selectPlayList.bind(this)
        this.selectMusicList = this.selectMusicList.bind(this)
    }

    selectPlayList (key) {
        this.props.setSelectedPLKey(key)
    }

    selectMusicList (key) {
        const videoId = this.props.playList[this.props.selectedPLKey].musicList[key].videoId

        this.props.setSelectedMLKey(key)
        this.props.setCurrentVideoId(videoId)
    }

    render () {
        const { playList, selectedPLKey, selectedMLKey } = this.props

        const mapToPlayList = (data) => {
            return data.map((playList, i) => {
                return (
                    <PlayInfo
                        title={playList.title}
                        key={i}
                        isSelected={i === selectedPLKey}
                        onClick={() => this.selectPlayList(i)}
                    />
                )
            })
        }

        const mapToMusicList = (data) => {
            return data.map((musicList, i) => {
                return (
                    <MusicInfo
                        singer={musicList.singer}
                        title={musicList.title}
                        key={i}
                        isSelected={i === selectedMLKey}
                        onClick={() => this.selectMusicList(i)}
                    />
                )
            })
        }

        return (
            <div className={cx('play-list-wrapper')}>
                <div className={cx('pl-header')}>
                    Play List
                </div>
                <div className={cx('pl-content')}>
                    <ul className={cx('play-list')}>
                        { mapToPlayList(playList) }
                    </ul>
                    <ul className={cx('music-list')}>
                        { mapToMusicList(playList[selectedPLKey].musicList) }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playList: state.youtube_video.playList,
        selectedPLKey: state.youtube_video.selectedPLKey,
        selectedMLKey: state.youtube_video.selectedMLKey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentVideoId: (videoId) => { dispatch(actions.setCurrentVideoId(videoId)) },
        setSelectedPLKey: (key) => { dispatch(actions.setSelectedPLKey(key)) },
        setSelectedMLKey: (key) => { dispatch(actions.setSelectedMLKey(key)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)