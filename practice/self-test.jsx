import { useState } from 'react';
function ChildExercise({ count, onIncrement }) {
  return (
    <div>
      <h2>👶</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
}
function Exercise() {
  const [count, setCount] = useState(0);
  const handleIncrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>👩👨‍🦰</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrementCount}>Increment Count</button>
      <ChildExercise count={count} onIncrement={handleIncrementCount} />
    </div>
  );
}
export default Exercise;
