import { A11yHidden } from "../index";
import style from "./ChatSummary.module.css";
// import PropTypes from "prop-types";
/*
 그룹 채팅창이면 기본 이미지 제공  | 개인 채팅창이면 상대방 프로필 사진 
*/

function ChatSummary() {
  return (
    <figure className={style.chatSummary_item}>
      <img src="/src/test_data/nqioadfh.jpeg" alt="사용자 프로필사진" />
      <figcaption>
        <A11yHidden as="h4">사용자 이름</A11yHidden>
        <p className={style.user_name}>🦙</p>
        <A11yHidden>직전 대화</A11yHidden>
        <p className={style.message}>잠 좀 일찍 자야되는데 😅 </p>
      </figcaption>
      <time>Today, 3:00 am</time>
    </figure>
  );
}

/*ChatSummary.propTypes = {

};*/
export default ChatSummary;
