import React, { Component } from 'react';
// import styles from './ChatInput.scss'
// import classNames from 'classnames/bind'
import { IoIosSend } from 'react-icons/io'
import cx from 'classnames'

import { connect } from 'react-redux'
import * as actions from '../../actions'


class ChatInput extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleChange (e) {
        this.props.setChatMessage(e.target.value)
    }

    handleCreate () {
        const chat = {
            message: this.props.message
        }

        if (chat.message === '') {
            return
        }

        this.props.addChatData(chat)
        this.props.setChatMessage('')
    }

    handleKeyPress (e) {
        if (e.charCode === 13) {
            this.handleCreate()
        }
    }

    render() {
        return(
            <div className={cx('chat-input')}>
              <div className={cx('ci-text')}>
                <input
                    type="text"
                    value={this.props.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
              </div>
              <div className={cx('ci-send')} onClick={this.handleCreate}>
                <span><IoIosSend /></span>
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.chat.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setChatMessage: (message) => { dispatch(actions.setChatMessage(message)) },
        addChatData: (chat) => { dispatch(actions.addChatData(chat)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
