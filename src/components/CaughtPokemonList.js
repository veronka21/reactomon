import React, { useContext } from 'react';
import { CaughtPokemonContext } from "../contexts/CaughtPokemonContext";
import CaughtPokemon from "../components/CaughtPokemon";

const CaughtPokemonList = (props) => {
    const [caughtPokemons, setCaughtPokemons] = useContext(CaughtPokemonContext);

    return caughtPokemons.map(pokemon => (
        <CaughtPokemon key={pokemon.pokemonId} pokemon={pokemon} />
    ))
}

export default CaughtPokemonList
