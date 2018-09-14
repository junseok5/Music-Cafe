import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class ChatView extends Component {
    constructor(props) {
        super(props);
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
            <div className={cx('chat-view')}>
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
