import Counter from "/src/components/Counter.jsx";
import Textinput from "/src/components/Textinput";
import { useRef } from "react";

function Exercise() {
  const counterRef = useRef(null);
  const inputRef = useRef(null);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "400px",
        gap: "20px",
      }}
    >
      <Counter ref={counterRef} />
      <button
        style={{ width: "200px" }}
        onClick={() => counterRef.current?.handleReset()}
      >
        하위 컴포넌트로부터 받은 reset function
      </button>
      <Textinput ref={inputRef} />
      <button
        style={{ width: "200px" }}
        onClick={() => inputRef.current?.reset()}
      >
        {" "}
        하위 컴포넌트로부터 받은 reset function
      </button>
    </div>
  );
}
export default Exercise;
