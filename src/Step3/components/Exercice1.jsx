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

    function handleDelete(id) {
        setList(list.filter(item => item.id !== id))
        console.log('deleted', id)
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
                {list.map(item => (
                    <li key={item.id}>
                        {item.task}
                        <button onClick={() => handleDelete(item.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Exercice1