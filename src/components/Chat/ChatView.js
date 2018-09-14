import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './ChatView.scss';
// import classNames from 'classnames/bind'
import cx from 'classnames'
// const cx = classNames.bind(styles)

const propTypes = {

};

const defaultProps = {

};

class ChatView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={cx('chat-view')}>
              <ul>
                <li>사이드 프로젝트</li>
                <li>음악 카페입니다.</li>
                <li>hi</li>
                  <li>음악을 들으며 대화를 나누어 보아요.</li>
                  <li>Hello</li>
                  <li>코딩은 어렵진 않지만 힘들어..</li>
                  <li>리액트 진입 장벽이 꽤 높구나..</li>
                  <li>모두들 잘 지냈니?</li>
                  <li>엠씨더맥스는 한국의 최고의 가수란다.</li>
                  <li>My way 노래방에서 불러봤어?</li>
                  <li>금발 미녀를 나는 좋아해</li>
                  <li>사람의 대화하는 어투만 봐도 성격을 알 수 있게 됐어.</li>
                  <li>너는 지금 머하니?</li>
                  <li>오늘 책 배송이 이상한 곳으로 되어서 기분이 꿀꿀했어.</li>
                  <li>선이는 오늘도 연락이 뜸하구나</li>
                  <li>이럴거면 헤어지는게 나을까?</li>
                  <li>솔직히 모르겠어</li>
                  <li>요즘 컨디션 관리를 시작했어</li>
                  <li>그런데 오늘 왜 그걸 봤니?</li>
                  <li>하... 아직 더 인내심이 필요해</li>
                  <li>운동도 해야하고</li>
                  <li>과제도 해야하네</li>
                  <li>그냥 내가 하고 싶은 거에만 집중하고 싶다</li>
                  <li>창업할래</li>
              </ul>
            </div>
        );
    }
}

ChatView.propTypes = propTypes;
ChatView.defaultProps = defaultProps;
export default ChatView;
