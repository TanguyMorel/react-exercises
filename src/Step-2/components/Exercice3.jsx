import React, { useState } from "react";

const Exercice3 = () => {
  const [showText, setShowText] = useState(false);

  function handleToggle() {
    setShowText(!showText);
  }

  return (
    <div>
      <button onClick={handleToggle}>
        {showText ? "Cacher le texte" : "Afficher le texte"}
      </button>
      {showText && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non
          impedit maiores laborum sequi, ad doloremque quas eveniet reiciendis
          eos nesciunt ex dolorem quod commodi fuga doloribus sunt delectus
          blanditiis.
        </p>
      )}
    </div>
  );
};

export default Exercice3;
