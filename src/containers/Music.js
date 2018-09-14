import React, { Component } from 'react'
import { Player, PlayList } from '../components/Music'
import cx from 'classnames'

class Music extends Component {
    render () {
        return (
            <div className={cx('music-wrapper')}>
                <Player />
                <PlayList />
            </div>
        )
    }
}

export default Music