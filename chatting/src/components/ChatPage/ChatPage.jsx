import { useEffect, useState } from "react";
import { NavBar, ChatroomList } from "../index";
import style from "./ChatPage.module.css";
// import { string } from "prop-types";
const user_id = "450foql2mb3cx6s";
const API_USERS_ENDPOINT = `${
  import.meta.env.VITE_PB_API
}api/collections/users/records?filter=(id="${user_id}")`;

function ChatPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_USERS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setData(data.items[0]))
      .catch((Error) => console.log(Error));
  }, []);

  return (
    <div className={style.ChatPage}>
      <NavBar userData={data} />
      <ChatroomList userId={data.id} />
    </div>
  );
}
export default ChatPage;

/*ChatPage.prototype = {
  chatroom_id :"string",
  sender: "string",
};*/
