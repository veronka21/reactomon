import React, { useState, createContext } from 'react';

export const CaughtPokemonContext = createContext();

export const CaughtPokemonProvider = (props) => {
    const [caughtPokemons, setCaughtPokemons] = useState([]);
    return (
        <CaughtPokemonContext.Provider value={[caughtPokemons, setCaughtPokemons]}>
            {props.children}
        </CaughtPokemonContext.Provider>
    )
}