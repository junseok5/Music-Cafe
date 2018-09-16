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
            openPL: false,
            openML: false
        }

        this.selectPlayList = this.selectPlayList.bind(this)
        this.selectMusicList = this.selectMusicList.bind(this)
        this.handleModal = this.handleModal.bind(this)
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

    handleModal (val) {
        this.setState({ openPL: val })
    }

    render () {
        const { playList, selectedPLKey } = this.props
        const selectedMLKey = playList[selectedPLKey].selectedKey
        console.log(selectedMLKey)

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

        const { openPL, openML } = this.state

        return (
            <div className={cx('play-list-wrapper')}>
                <Modal open={openPL} onClose={() => { this.handleModal(false) }} center>
                    <div className={cx('modal')}>
                        <h1>Hello</h1>
                    </div>
                </Modal>
                <Modal open={openML} onClose={() => { this.handleModal(false) }} center>
                    <h1>good</h1>
                </Modal>
                <div className={cx('pl-header')}>
                    Play List
                </div>
                <div className={cx('pl-content')}>
                    <ul className={cx('play-list')}>
                        <li className={cx('add_new_list')} onClick={() => { this.handleModal(true) }}>
                            <span>
                                + New
                            </span>
                        </li>
                        { mapToPlayList(playList) }
                    </ul>
                    <ul className={cx('music-list')}>
                         <li className={cx('add_new_list')} onClick={() => { this.handleModal(true) }}>
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
        playList: state.youtube_video.playList,
        prevPLKey: state.youtube_video.prevPLKey,
        selectedPLKey: state.youtube_video.selectedPLKey,
        selectedMLKey: state.youtube_video.selectedMLKey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentVideoId: (videoId) => { dispatch(actions.setCurrentVideoId(videoId)) },
        setPrevPLKey: (key) => { dispatch(actions.setPrevPLKey(key)) },
        setSelectedPLKey: (key) => { dispatch(actions.setSelectedPLKey(key)) },
        setSelectedMLKey: (key) => { dispatch(actions.setSelectedMLKey(key)) },
        setSelectedKey: (key, target) => { dispatch(actions.setSelectedKey(key, target)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)