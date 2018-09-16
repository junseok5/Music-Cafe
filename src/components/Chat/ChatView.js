import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class ChatView extends Component {
    constructor(props) {
        super(props);

        this.scrollToBottom = this.scrollToBottom.bind(this)
    }

    componentDidUpdate (prevProps) {
        if (prevProps.chatData.length !== this.props.chatData.length) {
            this.scrollToBottom()
        }
    }

    scrollToBottom () {
        this.element.scrollTop = this.element.scrollHeight
    }

    render() {

        const mapToChatData = (data) => {
            return data.map((chat, i) => {
                return (
                    <li key={i}>{chat.message}</li>
                )
            })
        }

        const { chatData } = this.props

        return (
            <div className={cx('chat-view')} ref={(ref) => {this.element = ref}}>
              <ul>
                  { mapToChatData(chatData) }
              </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chatData: state.chat.data
    }
}

export default connect(mapStateToProps)(ChatView)
