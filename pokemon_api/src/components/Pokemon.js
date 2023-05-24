import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((res) => {console.log(res.data.results);
                            setPokemon(res.data.results);})
        }, []);


    return (
        <div>
            {pokemon.length > 0 && pokemon.map((poke, index) => {
                return (<div key={index}> {poke.name} </div>);
            })}
        </div>
    );
}

export default Pokemon