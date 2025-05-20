import React from "react";

const Step4Rules = () => {
  return (
    <div id="step-1">
      <div className="head">
        <h1>Étape 4 : useEffect et appels API</h1>
        <p>Objectif : utiliser les effets et récupérer des données.</p>
      </div>
      <div className="exercices-list-wrapper">
        <p>Exercices :</p>
        <ol>
          <li>
            <p className="exercice-type">
              {" "}
              <span>01.</span> Titre de la page dynamique
            </p>
            <p className="exercice-rule">
              Change le document.title selon ce que l’utilisateur tape.
            </p>
          </li>
          <li>
            <p className="exercice-type">
              {" "}
              <span>02.</span>Appel à une API publique
            </p>
            <p className="exercice-rule">
              Ex. : appelle l’API de Pokémon ou de Star Wars et affiche une liste.
            </p>
          </li>
          <li>
            <p className="exercice-type">
              {" "}
              <span>03.</span>Chargement et erreur
            </p>
            <p className="exercice-rule">
              Gère l’état de chargement et les erreurs lors d’un fetch.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Step4Rules;
