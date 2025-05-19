import React, { useState } from 'react'

const Exercice1 = () => {
    const [task, setTask] = useState('')
    const [list, setList] = useState([])

    function handleClick() {
        const newTask = {
            id: crypto.randomUUID(),
            task: task
        };

        setList([...list, newTask])
        setTask('')
        console.log(list);
    }

    function handleChange(e) {
        setTask(e.target.value)
    }



    return (
        <>
            <h1>Votre liste de tâches</h1>
            <input type='text'
                value={task}
                onChange={handleChange}
                placeholder='Ajouter une tâche' />
            <button onClick={handleClick}> Ajouter à la liste</button>
            <ul>
                {list.map(p => (
                    <li key={p.id}> {p.task} </li>
                ))}
            </ul>
        </>
    )
}

export default Exercice1