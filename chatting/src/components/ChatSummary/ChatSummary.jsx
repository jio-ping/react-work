import { A11yHidden } from "../index";
import style from "./ChatSummary.module.css";
// import PropTypes from "prop-types";
function ChatSummary() {
  return (
    <figure className={style.chatSummary_item}>
      <img src="/src/test_data/nqioadfh.jpeg" alt="사용자 프로필사진" />
      <figcaption>
        <A11yHidden as="h2">사용자 이름</A11yHidden>
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
