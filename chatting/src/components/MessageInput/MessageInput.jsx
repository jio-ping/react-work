import style from "./Message.module.css";
function MessageInput() {
  return (
    <form className={style.message_form}>
      <input
        className={style.message_input}
        type="text"
        placeholder="Type your message here...😉"
      />
      <button className={style.message_send} type="button">
        <img src="../../../public/send.svg" alt="" />
      </button>
    </form>
  );
}
export default MessageInput;
