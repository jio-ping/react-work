import style from "./Message.module.css";
// import { string } from "prop-types";

/*
1. 디바운싱 적용 
2. 1자 이상의 메시지를 입력했을때 전송이 되어야됨 => 상응하는 애니메이션도 ㄱㅊ 
*/
function MessageInput() {
  return (
    <form className={style.message_form}>
      <input
        className={style.message_input}
        type="text"
        placeholder="Type your message here...😉"
      />
      <button className={style.message_send} type="button">
        <img src="../../../public/send.svg" alt="" />
      </button>
    </form>
  );
}

/*MessageInput.prototype = {

};*/

export default MessageInput;
