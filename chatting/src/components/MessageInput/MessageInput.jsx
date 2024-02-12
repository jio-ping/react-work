import style from "./Message.module.css";
// import { string } from "prop-types";
import { useRef } from "react";
import { timeStamp } from "/src/utils";

import PocketBase from "pocketbase";
const pb = new PocketBase(import.meta.env.VITE_PB_API);
const TEST_ID = "450foql2mb3cx6s";

function MessageInput({ chatroomIdx }) {
  const message = useRef("");

  // 전송버튼 클릭/엔터 누르면 작동하는 이벤트 함수
  async function handleSubmit(e) {
    e.preventDefault();
    const messageContent = message.current.value;
    if (messageContent) {
      const now = Date.now();
      const message_data = {
        chatroom_idx: chatroomIdx,
        sender: TEST_ID,
        message_content: messageContent,
        sent_at: timeStamp(now),
      };
      await pb.collection("message").create(message_data);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.message_form}>
      <input
        className={style.message_input}
        type="text"
        placeholder="Type your message here...😉"
        ref={message}
      />
      <button className={style.message_send} type="submit">
        <img src="/send.svg" alt="" />
      </button>
    </form>
  );
}

/*MessageInput.prototype = {

};*/

export default MessageInput;
