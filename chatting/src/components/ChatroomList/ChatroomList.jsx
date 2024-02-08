/*
1. 채팅방 테이블에서 내 아이디 필터링해서 들고옴 
2. 3인이상이면 Group, 2인이면 People으로 
*/
import { ChatSummary } from "../index";
import { A11yHidden } from "../index";
import style from "./ChatroomList.module.css";

function ChatroomList() {
  return (
    <div className={style.chatroom_lists}>
      <A11yHidden as="h2">채팅방 목록 </A11yHidden>
      <section className={style.chatroom_list}>
        <h3>Group</h3>
        <ChatSummary />
      </section>
      <section className={style.chatroom_list}>
        <h3>People</h3>
        <ChatSummary />
        <ChatSummary />
        <ChatSummary />
      </section>
    </div>
  );
}
export default ChatroomList;
