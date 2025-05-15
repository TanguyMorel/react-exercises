import '../styles/Step1Rules.css'

const Step1Rules = () => {
  return (
    <>
      <div id='step-1'>
            <div className='head'>
            <h1>Étape 1 : Bases de React</h1>
            <p>Objectif : comprendre le JSX, les composants et les props.</p>
            </div>
                <div className='exercices-list-wrapper'>
                <p>Exercices :</p>
                <ol>
                    <li>
                        <p className='exercice-type'> <span>01.</span> Hello World</p>
                        <p className='exercice-rule'>Crée une app React qui affiche “Bonjour React !”</p>
                    </li>
                    <li>
                        <p className='exercice-type'> <span>02.</span>Composant personnalisé</p>
                        <p className='exercice-rule'>Crée un composant BonjourUtilisateur qui prend un nom en prop et affiche “Bonjour, [nom] !”</p>
                    </li>
                    <li>
                        <p className='exercice-type'> <span>03.</span>Plusieurs composants</p>
                        <p className='exercice-rule'>Crée 3 composants : Entête, Corps, PiedDePage et affiche-les ensemble.</p>
                    </li>
                </ol>
          </div>
          
      </div>
    </>
  )
}

export default Step1Rules