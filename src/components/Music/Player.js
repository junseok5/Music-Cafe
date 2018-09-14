import React, { Component, PropTypes } from 'react'
// import styles from './Player.scss'
// import classNames from 'classnames/bind'
import cx from 'classnames'
import Youtube from 'react-youtube'
import { connect } from 'react-redux'

// const cx = classNames.bind(styles)

class Player extends Component {

    constructor (props) {
        super(props)

        this._onReady = this._onReady.bind(this)
    }

    _onReady (event) {
        console.log(event.target)
    }

    render () {
        const { videoId } = this.props
        const { _onReady } = this
        const opts = {
            height: '315',
            width: '100%',
            playerVars: {
                autoplay: 0,
                controls: 0,
                playsinline: 1,
                showinfo: 0
            }
        }

        return (
            <div className={cx('player')}>
                <Youtube
                    videoId={videoId}
                    opts={opts}
                    onReady={_onReady}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videoId: state.youtube_video.currentVideoId
    }
}

export default connect(mapStateToProps)(Player)