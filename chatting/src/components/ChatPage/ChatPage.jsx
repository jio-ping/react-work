import { Chatroom, NavBar, ChatroomList } from "../index";
import style from "./ChatPage.module.css";
// import { string } from "prop-types";
function ChatPage() {
  return (
    <div className={style.ChatPage}>
      <NavBar />
      <ChatroomList />
      <Chatroom />
    </div>
  );
}
export default ChatPage;
/*ChatPage.prototype = {
  chatroom_id :"string",
  sender: "string",
};*/
