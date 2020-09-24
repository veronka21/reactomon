import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonListItem from './PokemonListItem';

export class PokemonList extends Component {

    render() {
        return (this.props.pokemons.map(pokemon => (
        <PokemonListItem key={ pokemon.url } pokemon={ pokemon } />
        )))
    }
}

PokemonList.propTypes = {
    pokemons: PropTypes.array.isRequired
}

export default PokemonList;