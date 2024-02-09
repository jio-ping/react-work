import { A11yHidden } from "../index";
import style from "./ChatroomInfo.module.css";
// import PropTypes from "prop-types";

function ChatroomInfo() {
  return (
    <div className={style.chatroom_info}>
      <A11yHidden as="h2">어쩌구님과의 대화방</A11yHidden>
      <figure className={style.participants_info}>
        <img src="/src/test_data/nqioadfh.jpeg" alt="어쩌구님 프로필" />
        <figcaption>어쩌구</figcaption>
      </figure>
      <button type="button">
        <img src="../../../public/more.svg" alt="" />
      </button>
    </div>
  );
}
/*ChatroomInfo.prototype = {

};*/

export default ChatroomInfo;
