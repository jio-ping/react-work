import style from "/src/components/SpeechBubble/SpeechBubble.module.css";
// import { string } from "prop-types";
/*
메시지 데이터 중 나인지 상대방인지 구분해 렌더링 
*/
function Bubble({ sender }) {
  let sender_styling = sender !== "나" ? style.other_bubble : style.my_bubble;
  return (
    <div className={`${sender_styling} ${style.bubble}`}>
      <span className="message">
        I am doing well, Can we meet tomorrow ?I am doing well, Can we meet
        tomorrow ?I am doing well, Can we meet tomorrow ?I am doing well, Can we
        meet tomorrow ?I am doing well, Can we meet tomorrow ?
      </span>
    </div>
  );
}

function BubbleInfo({ sender }) {
  let sender_styling = sender === "나" ? style.my_info : style.other_info;
  return (
    <div className={`${sender_styling} ${style.bubble_info}`}>
      {/*  위 메시지와 시간이 같으면 생략... */}
      <time>Today, 8:30 pm</time>
    </div>
  );
}

function SpeechBubble({ sender }) {
  console.log(sender);
  return (
    <>
      {/* 남의 말풍선 */}
      <div className={style.speech_bubble_wrapper}>
        <Bubble sender={sender} />
        <BubbleInfo sender={sender} />
      </div>
      {/* 내 말풍선 */}
      <div className={style.speech_bubble_wrapper}>
        <Bubble sender="나" />
        <BubbleInfo sender="나" />
      </div>
    </>
  );
}
export default SpeechBubble;

/*SpeechBubble.prototype = {
  chatroom_id :"string",
  sender: "string",
};*/
