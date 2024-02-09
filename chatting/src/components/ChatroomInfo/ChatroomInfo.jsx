import { A11yHidden } from "../index";
import style from "./ChatroomInfo.module.css";
// import PropTypes from "prop-types";

function ChatroomInfo() {
  return (
    <div className={style.chatroom_info}>
      <figure className={style.participants_info}>
        <img src="/src/test_data/nqioadfh.jpeg" alt="" />
        <figcaption>뺙뺙💜</figcaption>
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
