import React, { useState } from "react";

const Exercise2 = () => {
  const [text, setText] = useState([""]);
  function handleChange(e) {
    console.log(text);
    setText(e.target.value);
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
        </div>
      </div>
    </>
  );
};

export default Exercise2;
