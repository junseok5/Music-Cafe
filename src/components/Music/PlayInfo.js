import React from 'react'
// import styles from './PlayInfo.scss'
// import classNames from 'classnames/bind'
import cx from 'classnames'

// const cx = classNames.bind(styles)

const PlayInfo = ({ title, isSelected, onClick }) => {
    return (
        <li className={cx({'selected': isSelected})} onClick={onClick}>
            <span>
                { title }
            </span>
        </li>
    )
}

export default PlayInfo