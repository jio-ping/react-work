import { useEffect, useState, useImperativeHandle, forwardRef } from "react";

function Counter(props, ref) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(ref); //{current:handleReset:()=>{/* 생략 */}}
  }, []);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  useImperativeHandle(ref, () => ({
    handleReset,
  }));
  return (
    <div>
      <h1 className="text-2xl">Count:{count}</h1>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
  );
}

export default forwardRef(Counter);
