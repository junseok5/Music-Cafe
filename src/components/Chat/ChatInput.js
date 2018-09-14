import React, { Component } from 'react';
// import styles from './ChatInput.scss'
// import classNames from 'classnames/bind'
import { IoIosSend } from 'react-icons/io'
import cx from 'classnames'
// const cx = classNames.bind(styles)

class ChatInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={cx('chat-input')}>
              <div className={cx('ci-text')}>
                <input type="text" />
              </div>
              <div className={cx('ci-send')}>
                <span><IoIosSend /></span>
              </div>
            </div>
        );
    }
}

export default ChatInput;
