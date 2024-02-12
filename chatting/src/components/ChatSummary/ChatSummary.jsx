import { A11yHidden } from "../index";
import style from "./ChatSummary.module.css";
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";

const API_USERS_ENDPOINT = `${
  import.meta.env.VITE_PB_API
}api/collections/users/records`;
const API_MESSAGE_ENDPOINT = `${
  import.meta.env.VITE_PB_API
}api/collections/message/records`;
function ChatSummary({
  onClickChatRoom,
  userId,
  group,
  chatroomIdx,
  participant_id,
}) {
  const [participantData, setParticipantsData] = useState([]);
  const [lastMessage, setLastMessage] = useState("");

  const handleChatRoom = () => {
    onClickChatRoom(chatroomIdx);
  };
  useEffect(() => {
    if (participant_id.length > 0) {
      Promise.all(
        participant_id.map((each_id) => {
          if (each_id !== userId) {
            return fetch(`${API_USERS_ENDPOINT}?filter=(id~"${each_id}")`).then(
              (res) => res.json()
            );
          } else {
            return Promise.resolve(null);
          }
        })
      ) .then((responses) => {
          //null 값(= 접속자 본인 id)을 제외하고 데이터만 추출
          const data = responses.filter((response) => response !== null);
          const updatedParticipants = data.flatMap((item) => item.items);
          setParticipantsData(updatedParticipants);
        })
        .catch((error) => console.error(error));
    }
  }, [participant_id, userId]);

  useEffect(() => {
    fetch(
      `${API_MESSAGE_ENDPOINT}?sort=-sent_at&filter=(chatroom_idx="${chatroomIdx}")`
    )
      .then((res) => res.json())
      .then((data) =>
        setLastMessage([data.items[0].message_content, data.items[0].sent_at])
      )
      .catch((Error) => console.error(Error));
  }, [chatroomIdx]);
  return (
    <figure className={style.chatSummary_item} onClick={handleChatRoom}>
      <img
        src={
          group || participantData.length === 0
            ? "groupicon.jpeg"
            : `${import.meta.env.VITE_PB_API}api/files/users/${
                participantData[0].id
              }/${participantData[0].user_photo}`
        }
        alt="사용자 프로필사진"
      />
      <figcaption>
        <A11yHidden as="h4">사용자 이름</A11yHidden>
        <p className={style.user_name}>
          {participantData
            .map((participant) => participant.user_nickname)
            .join(", ")}
        </p>
        <A11yHidden>직전 대화</A11yHidden>
        <p className={style.message}>
          {Array.isArray(lastMessage) ? lastMessage[0] : ""}
        </p>
      </figcaption>
      <time>{lastMessage[1]}</time>
    </figure>
  );
}

/*ChatSummary.propTypes = {

};*/
export default ChatSummary;
