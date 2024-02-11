import style from "/src/components/SpeechBubble/SpeechBubble.module.css";
// import { string } from "prop-types";
/*
메시지 데이터 중 나인지 상대방인지 구분해 렌더링 
*/

const TEST_ID = "450foql2mb3cx6s";
function Bubble({ sender, message_content }) {
  console.log(message_content);
  let sender_styling =
    sender !== TEST_ID ? style.other_bubble : style.my_bubble;
  return (
    <>
      <div className={`${sender_styling} ${style.bubble}`}>
        <span className="message">{message_content}</span>
      </div>
    </>
  );
}

function BubbleInfo({ sender, sent_at }) {
  let sender_styling = sender === TEST_ID ? style.my_info : style.other_info;
  return (
    <div className={`${sender_styling} ${style.bubble_info}`}>
      {/*  위 메시지와 시간이 같으면 생략... */}
      <time>{sent_at}</time>
    </div>
  );
}

function SpeechBubble({ messageInfo }) {
  console.log(messageInfo);
  const { sender, message_content, sent_at } = messageInfo;
  let sender_wrapper =
    sender === TEST_ID ? style.my_bubble : style.other_bubble;
  return (
    <>
      <div className={`${style.speech_bubble_wrapper} ${sender_wrapper}`}>
        <Bubble sender={sender} message_content={message_content} />
        <BubbleInfo sender={sender} sent_at={sent_at} />
      </div>
    </>
  );
}
export default SpeechBubble;

/*SpeechBubble.prototype = {
  chatroom_id :"string",
  sender: "string",
};*/
