import React from "react";

const Step3Rules = () => {
  return (
    <div id="step-1">
      <div className="head">
        <h1>Étape 3 : Listes et rendus conditionnels</h1>
        <p>Objectif : manipuler des tableaux, afficher dynamiquement, filtrer.</p>
      </div>
      <div className="exercices-list-wrapper">
        <p>Exercices :</p>
        <ol>
          <li>
            <p className="exercice-type">
              {" "}
              <span>01.</span> Liste de tâches simple
            </p>
            <p className="exercice-rule">
              Affiche une liste de tâches et ajoute une nouvelle tâche.
            </p>
          </li>
          <li>
            <p className="exercice-type">
              {" "}
              <span>02.</span>Filtrage d’une liste
            </p>
            <p className="exercice-rule">
              Ajoute une recherche pour filtrer une liste d’éléments (films, contacts, etc.)
            </p>
          </li>
          <li>
            <p className="exercice-type">
              {" "}
              <span>03.</span>Rendu conditionnel
            </p>
            <p className="exercice-rule">
              Affiche un message différent selon l’heure (matin/après-midi/soir).
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Step3Rules;
