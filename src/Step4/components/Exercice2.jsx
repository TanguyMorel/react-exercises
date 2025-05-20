import React, { useEffect, useState } from 'react'

const Exercice2 = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function getPokemons() {
            const APIURL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'

            try {
                const response = await fetch(APIURL);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const json = await response.json();
                setPokemons(json.results)
                console.log(json.results);
                
            } catch (error) {
                console.error(error.message);
            }
        }
        getPokemons()
    }, [])

    return (
        <>

            <h1>
                Liste des 100 premiers pokémons
            </h1>
              <ul>
                {pokemons.map((pokemon, index) => (
                    <li style={{display: 'flex', flexDirection: 'column',}} key={index}>{pokemon.name}
                    <img style={{aspectRatio: 1, width: "150px"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt="" /></li>
                ))}
            </ul>
        </>
    )
}

export default Exercice2