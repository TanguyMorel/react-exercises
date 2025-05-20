import React, { useState } from 'react'

const Exercice2 = () => {

    const films = [
        { id: 1, title: 'Inception' },
        { id: 2, title: 'Interstellar' },
        { id: 3, title: 'The Matrix' },
        { id: 4, title: 'Avatar' },
    ];

    const [searchItem, setSearchItem] = useState("")
    function handleChange(e) {
        setSearchItem(e.target.value)
    }

    const filteredList = films.filter(film =>
        film.title.toLowerCase().includes(searchItem.toLowerCase())
    );



    return (
        <>
            <input type="text" onChange={handleChange} />
            <ul>
                {filteredList.map(film => (
                    <li key={film.id}>
                        {film.title}
                    </li>
                ))
                }
                {filteredList.length === 0 && <p>Aucun film trouvé...</p>}
            </ul>
        </>
    )
}

export default Exercice2