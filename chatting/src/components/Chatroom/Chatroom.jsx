import style from "./Chatroom.module.css";
import {
  SpeechBubble,
  MessageInput,
  ChatroomInfo,
} from "/src/components/index.js";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
const pb = new PocketBase(import.meta.env.VITE_PB_API);

// import { string } from "prop-types";
const API_MESSAGE_ENDPOINT = `${
  import.meta.env.VITE_PB_API
}api/collections/message/records`;
// 선택한 채팅방
function Chatroom() {
  // 선택한 채팅방
  const [chatRoom, setChatroom] = useState("1");

  const [message, setMessage] = useState([]);
  // realtime API
  useEffect(() => {
    pb.collection("message").subscribe("*", function (e) {
      setMessage(e.record);
    });
  }, []);

  // 채팅창
  useEffect(() => {
    const 선택한_채팅방_메시지 = `${API_MESSAGE_ENDPOINT}?sort=sent_at,sender&filter=(chatroom_idx="${chatRoom}")`;
    fetch(선택한_채팅방_메시지)
      .then((res) => res.json())
      .then((data) => setMessage(data.items))
      .catch((Error) => console.error(Error));
  }, []);

  return (
    <div className={style.chatroom}>
      <ChatroomInfo />
      <div className={style.Bubbles}>
        {message.map((item) => (
          <SpeechBubble key={item.id} messageInfo={item} />
        ))}
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
