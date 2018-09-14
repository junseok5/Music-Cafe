import React, { Component } from 'react'
import { ChatHeader, ChatView, ChatInput } from '../components/Chat'
import cx from 'classnames'

class Chat extends Component {
    render () {
        return (
            <div className={cx('chat-wrapper')}>
                <ChatHeader />
                <ChatView />
                <ChatInput />
            </div>
        )
    }
}

export default Chat