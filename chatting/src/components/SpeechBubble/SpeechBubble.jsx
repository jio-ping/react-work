import style from "/src/components/SpeechBubble/SpeechBubble.module.css";
/*
메시지 데이터 중 나인지 상대방인지 구분해 렌더링 
*/
function SpeechBubble() {
  return (
    <>
      {/* 남의 말풍선 */}
      <div className={style.speech_bubble_wrapper}>
        <div className={`${style.others_bubble} ${style.bubble}`}>
          <span className="message">
            I am doing well, Can we meet tomorrow ?I am doing well, Can we meet
            tomorrow ?I am doing well, Can we meet tomorrow ?I am doing well,
            Can we meet tomorrow ?I am doing well, Can we meet tomorrow ?
          </span>
        </div>
        <div className={`${style.circle} ${style.other_circle}`}></div>
      </div>
      {/* 내 말풍선 */}
      <div className={style.speech_bubble_wrapper}>
        <div className={`${style.my_bubble} ${style.bubble}`}>
          <span className="message">
            I am doing well, Can we meet tomorrow ?I am doing well, Can we meet
            tomorrow ?I am doing well, Can we meet tomorrow ?I am doing well,
            Can we meet tomorrow ?I am doing well, Can we meet tomorrow ?
          </span>
        </div>
        <div className={`${style.circle} ${style.my_circle}`}></div>
      </div>
    </>
  );
}
export default SpeechBubble;
