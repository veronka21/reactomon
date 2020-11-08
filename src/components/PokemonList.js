import React from "react";
import PropTypes from "prop-types";
import PokemonListItem from "./PokemonListItem";

const PokemonList = (props) => {

  props.pokemons.forEach(pokemon => pokemon.isCaught = false);

  return props.pokemons.map((pokemon) => (
    <PokemonListItem key={pokemon.url} pokemon={pokemon} />
  ));
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
