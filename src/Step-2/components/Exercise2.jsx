import React, { useState } from "react";

const Exercise2 = () => {
  const [text, setText] = useState([""]);
  const [count, setCount] = useState(0);

  function handleChange(e) {
    setText(e.target.value);
    setCount(e.target.value.length);
  }

  function handleClick() {
    setText("");
    document.querySelector("input").value = "";
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          style={{ display: "flex", width: "300px" }}
          type="text"
          placeholder="Type something"
          onChange={handleChange}
        />
        <div>
          <p>Tu as écrit :</p>
          <p>{text}</p>
          <p>{count}</p>
        </div>
        <button onClick={handleClick}>Effacer</button>
      </div>
    </>
  );
};

export default Exercise2;
