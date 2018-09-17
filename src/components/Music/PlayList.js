import React, { Component } from 'react'
import cx from 'classnames'
import PlayInfo from './PlayInfo'
import MusicInfo from './MusicInfo'
import Modal from 'react-responsive-modal'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class PlayList extends Component {

    constructor (props) {
        super(props)
        this.state = {
            openModal: false,
            modalMode: -1
        }

        this.selectPlayList = this.selectPlayList.bind(this)
        this.selectMusicList = this.selectMusicList.bind(this)
        this._addPlayList = this._addPlayList.bind(this)
        this._addMusic = this._addMusic.bind(this)
        this.handlePlayList = this.handlePlayList.bind(this)
        this.handleMusicVideoId = this.handleMusicVideoId.bind(this)
        this.handleMusicTitle = this.handleMusicTitle.bind(this)
        this.handleMusicSinger = this.handleMusicSinger.bind(this)
        this.handlePLKeyPress = this.handlePLKeyPress.bind(this)
        this.handleMKeyPress = this.handleMKeyPress.bind(this)
    }

    selectPlayList (key) {
        this.props.setPrevPLKey(this.props.selectedPLKey)
        this.props.setSelectedPLKey(key)
    }

    selectMusicList (key) {
        const videoId = this.props.playList[this.props.selectedPLKey].musicList[key].videoId

        this.props.setSelectedKey(-1, this.props.prevPLKey)
        this.props.setSelectedKey(key, this.props.selectedPLKey)
        this.props.setCurrentVideoId(videoId)
        this.forceUpdate()
    }

    _addPlayList (playList) {
        if (playList === '') return
        this.props.addPlayList(playList)
        this.props.handleModal(false)
        this.props.setPlayListTitle('')
    }

    _addMusic (videoId, title, singer) {
        if (videoId === '' || title === '' || singer === '') return
        const music = {
            title,
            singer,
            videoId
        }

        this.props.addMusic(music)
        this.props.handleModal(false)
        this.props.setMusicVideoId('')
        this.props.setMusicTitle('')
        this.props.setMusicSinger('')
    }

    handlePlayList (e) {
        this.props.setPlayListTitle(e.target.value)
    }

    handleMusicVideoId (e) {
        this.props.setMusicVideoId(e.target.value)
    }

    handleMusicTitle (e) {
        this.props.setMusicTitle(e.target.value)
    }

    handleMusicSinger (e) {
        this.props.setMusicSinger(e.target.value)
    }

    handlePLKeyPress (e) {
        if (e.charCode === 13) {
            this._addPlayList(e.target.value)
        }
    }

    handleMKeyPress (e) {
        if (e.charCode === 13) {
            this._addMusic(this.props.videoId, this.props.musicTitle, this.props.musicSinger)
            this.props.handleModal(false)
        }
    }

    render () {
        const {
            openModal,
            modeModal,
            playList,
            selectedPLKey,
            handleModal,
            playListTitle,
            videoId,
            musicTitle,
            musicSinger
        } = this.props
        const selectedMLKey = playList[selectedPLKey].selectedKey

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

        const plModal = (
            <div className={cx('modal')}>
                <h2>New Play List</h2>
                <div className={cx('content')}>
                    <input
                        type="text"
                        value={playListTitle}
                        onChange={this.handlePlayList}
                        onKeyPress={this.handlePLKeyPress}
                        placeholder="play list name"
                    />
                </div>
                <div className={cx('footer')}>
                    <button onClick={() => { this._addPlayList(playListTitle) }}>OK</button>
                    <button onClick={() => { handleModal(false) }}>Cancel</button>
                </div>
            </div>
        )

        const mlModal = (
            <div className={cx('modal')}>
                <h2>New Music</h2>
                <div className={cx('content')}>
                    <input
                        type="text"
                        value={videoId}
                        onChange={this.handleMusicVideoId}
                        placeholder="youtube video id"
                    />
                    <input
                        type="text"
                        value={musicTitle}
                        onChange={this.handleMusicTitle}
                        placeholder="title"
                    />
                    <input
                        type="text"
                        value={musicSinger}
                        onChange={this.handleMusicSinger}
                        onKeyPress={this.handleMKeyPress}
                        placeholder="singer"
                    />
                </div>
                <div className={cx('footer')}>
                    <button onClick={() => { this._addMusic(videoId, musicTitle, musicSinger) }}>OK</button>
                    <button onClick={() => { handleModal(false) }}>Cancel</button>
                </div>
            </div>
        )
        
        // modal view mapping
        let view
        if (modeModal === 0) {
            view = plModal
        } else if (modeModal === 1) {
            view = mlModal
        }

        return (
            <div className={cx('play-list-wrapper')}>
                <Modal open={openModal} showCloseIcon={false} onClose={() => { handleModal(false) }} center>
                    { view }
                </Modal>
                <div className={cx('pl-header')}>
                    Play List
                </div>
                <div className={cx('pl-content')}>
                    <ul className={cx('play-list')}>
                        <li className={cx('add_new_list')} onClick={() => { handleModal(true, 0) }}>
                            <span>
                                + New
                            </span>
                        </li>
                        { mapToPlayList(playList) }
                    </ul>
                    <ul className={cx('music-list')}>
                         <li className={cx('add_new_list')} onClick={() => { handleModal(true, 1) }}>
                            <span>
                                + New
                            </span>
                        </li>
                        { mapToMusicList(playList[selectedPLKey].musicList) }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        openModal: state.youtube_video.openModal,
        modeModal: state.youtube_video.modeModal,
        playList: state.youtube_video.playList,
        prevPLKey: state.youtube_video.prevPLKey,
        selectedPLKey: state.youtube_video.selectedPLKey,
        selectedMLKey: state.youtube_video.selectedMLKey,
        playListTitle: state.youtube_video.playListTitle,
        videoId: state.youtube_video.videoId,
        musicTitle: state.youtube_video.musicTitle,
        musicSinger: state.youtube_video.musicSinger
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentVideoId: (videoId) => { dispatch(actions.setCurrentVideoId(videoId)) },
        setPrevPLKey: (key) => { dispatch(actions.setPrevPLKey(key)) },
        setSelectedPLKey: (key) => { dispatch(actions.setSelectedPLKey(key)) },
        setSelectedMLKey: (key) => { dispatch(actions.setSelectedMLKey(key)) },
        setSelectedKey: (key, target) => { dispatch(actions.setSelectedKey(key, target)) },
        handleModal: (openModal, modeModal) => { dispatch(actions.controlModal(openModal, modeModal)) },
        addPlayList: (playList) => { dispatch(actions.addPlayList(playList)) },
        addMusic: (music) => { dispatch(actions.addMusic(music)) },
        setPlayListTitle: (title) => { dispatch(actions.setPlayListTitle(title)) },
        setMusicVideoId: (videoId) => { dispatch(actions.setMusicVideoId(videoId)) },
        setMusicTitle: (title) => { dispatch(actions.setMusicTitle(title)) },
        setMusicSinger: (singer) => { dispatch(actions.setMusicSinger(singer)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)