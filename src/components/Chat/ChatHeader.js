import React from 'react'
// import styles from './ChatHeader.scss'
// import classNames from 'classnames/bind'
import cx from 'classnames'

// const cx = classNames.bind(styles)

const ChatHeader = () => {
    return (
        <div className={cx('chat-header')}>
            <span>Music Cafe</span>
        </div>
    )
}

export default ChatHeader