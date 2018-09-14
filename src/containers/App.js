import React, { Component } from 'react';
import { Chat, Music } from './'
import cx from 'classnames'

class App extends Component {
  render() {
    return (
      <div className={cx('view-template')}>
        <div className={cx('content-wrapper')}>
            <div className={cx('content')}>
                <Chat />
                <Music />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
