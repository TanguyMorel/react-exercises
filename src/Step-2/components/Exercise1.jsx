import { useState } from "react";

const Exercise1 = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Compteur : {count}</p>
      <div>
        <button onClick={handleIncrement}>Incrément</button>
        <button onClick={handleDecrement}>Décrémenter</button>
      </div>
    </div>
  );
};

export default Exercise1;
