import React from 'react'
import { FaMusic } from 'react-icons/fa'
// import styles from './MusicInfo.scss'
// import classNames from 'classnames/bind'
import cx from 'classnames'

// const cx = classNames.bind(styles)

const MusicInfo = ({ singer, title, isSelected, onClick }) => {
    return (
        <li className={cx({'selected': isSelected})} onClick={onClick}>
            <span><FaMusic /> { singer }</span>
            <span> - </span>
            <span>{ title }</span>
        </li>
    )
}

export default MusicInfo