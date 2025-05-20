import React from 'react'

const Exercice3 = () => {
    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()
    let message
    if (hour < 12) {
       message = 'Bonjour, c\'est le matin !' 
    } else if (hour < 18) {
       message = 'Bonjour, et bon après-midi !' 
    } else {
        message = 'Bonsoir !'
    }
    return (
        <div>
            <h1>{message}</h1>
            <p>Il est {hour}h{minutes}</p>
        </div>
  )
}

export default Exercice3