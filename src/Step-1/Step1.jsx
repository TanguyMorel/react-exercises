import Step1Rules from './components/Step1Rules'
import Exercise1 from './components/Exercise1'
import Exercise2 from './components/Exercise2'
import Exercise3 from './components/Exercise3'


const Step1 = () => {
  return (
    <>
    <Step1Rules/>
    <Exercise1/>
    <Exercise2 nom="Tanguy"/>
    <Exercise3/>
    </>

  )
}

export default Step1