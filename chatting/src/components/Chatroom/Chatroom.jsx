import style from "./Chatroom.module.css";
import {
  SpeechBubble,
  MessageInput,
  ChatroomInfo,
} from "/src/components/index.js";
// import { string } from "prop-types";
function Chatroom() {
  return (
    <div className={style.chatroom}>
      <ChatroomInfo />
      <div className={style.Bubbles}>
        <SpeechBubble sender="너" />
        <SpeechBubble sender="나" />
      </div>
      <MessageInput />
    </div>
  );
}
export default Chatroom;
/*Chatroom.prototype = {
  chatroom_id :"string",
  sender: "string",
};*/
