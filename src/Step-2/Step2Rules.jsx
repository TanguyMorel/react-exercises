import React from "react";

const Step2Rules = () => {
  return (
    <div id="step-1">
      <div className="head">
        <h1>Étape 2 : State et événements</h1>
        <p>Objectif : comprendre le useState et la gestion des événements.</p>
      </div>
      <div className="exercices-list-wrapper">
        <p>Exercices :</p>
        <ol>
          <li>
            <p className="exercice-type">
              {" "}
              <span>01.</span> Compteur simple
            </p>
            <p className="exercice-rule">
              Un bouton “+1” qui incrémente un nombre affiché à l’écran.
            </p>
          </li>
          <li>
            <p className="exercice-type">
              {" "}
              <span>02.</span>Formulaire controlé
            </p>
            <p className="exercice-rule">
              Un champ texte qui affiche en direct ce que l’utilisateur tape.
            </p>
          </li>
          <li>
            <p className="exercice-type">
              {" "}
              <span>03.</span>Toggle affichage
            </p>
            <p className="exercice-rule">
              Un bouton qui affiche ou cache un paragraphe.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Step2Rules;
