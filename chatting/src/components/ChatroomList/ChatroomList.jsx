/*
1. 채팅방 테이블에서 내 아이디 필터링해서 들고옴 
2. 3인이상이면 Group, 2인이면 People으로 
3. 클릭시 ... 옆에 채팅방 렌더링 
*/
import { ChatSummary, Chatroom } from "../index";
import { A11yHidden } from "../index";
import style from "./ChatroomList.module.css";
import { useEffect, useState } from "react";
function ChatroomList({ userId }) {
  const API_CHATROOM_LIST_ENDPOINT = `${
    import.meta.env.VITE_PB_API
  }api/collections/chatroom/records?filter=(participant_id~"${userId}")`;
  const [selectedChatroom, setSelectedChatroom] = useState(1);
  const [chatroomList, setChatroomList] = useState([]);
  const handleChatRoomClick = (chatroomIdx) => {
    console.log(chatroomIdx);
    setSelectedChatroom(chatroomIdx);
  };
  //사용자가 참가하고 있는 채팅방 정보를 불러오는 이펙트함수
  useEffect(() => {
    if (userId) {
      fetch(API_CHATROOM_LIST_ENDPOINT)
        .then((res) => res.json())
        .then((data) => setChatroomList(data.items))
        .catch((Error) => console.log(Error));
    }
  }, [userId]);

  const [chatRoomFilter, setChatRoomFilter] = useState({
    group: {},
    people: {},
  });

  //단체 채팅방인지 개인채팅방인지 구분하는 이펙트함수
  useEffect(() => {
    chatroomList.forEach((item) => {
      if (item.participant_id.length > 2) {
        setChatRoomFilter((prevState) => ({
          ...prevState,
          group: {
            ...prevState.group,
            [item.chatroom_idx]: item.participant_id,
          },
        }));
      } else {
        setChatRoomFilter((prevState) => ({
          ...prevState,
          people: {
            ...prevState.people,
            [item.chatroom_idx]: item.participant_id,
          },
        }));
      }
    });
  }, [chatroomList]);


  
  return (
    <>
      <div className={style.chatroom_lists}>
        <A11yHidden as="h2">채팅방 목록 </A11yHidden>
        <section className={style.chatroom_list}>
          <h3>Group</h3>
          {Object.entries(chatRoomFilter["group"]).map((item) => (
            <ChatSummary
              onClickChatRoom={handleChatRoomClick}
              group
              key={item[0]}
              chatroomIdx={item[0]}
              participant_id={item[1]}
            />
          ))}
        </section>
        <section className={style.chatroom_list}>
          <h3>People</h3>
          {Object.entries(chatRoomFilter["people"]).map((item) => (
            <ChatSummary
              onClickChatRoom={handleChatRoomClick}
              userId={userId}
              key={item[0]}
              chatroomIdx={item[0]}
              participant_id={item[1]}
            />
          ))}
        </section>
      </div>
      <Chatroom chatroomIdx={selectedChatroom} />
    </>
  );
}
export default ChatroomList;
