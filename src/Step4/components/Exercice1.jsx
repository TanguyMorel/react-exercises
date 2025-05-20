import React, { useState, useEffect } from 'react'

const Exercice1 = () => {
  const [newTitle, setNewTitle] = useState('Mon titre')

  useEffect(() => {
    document.title = newTitle
  }, [newTitle]) 

  function handleChange(e) {
    setNewTitle(e.target.value)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Type here..."
        onChange={handleChange}
      />
      <p>While typing, look at the title.</p>
    </>
  )
}

export default Exercice1
