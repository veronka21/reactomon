import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from '../elements/Card';
import { CaughtPokemonContext } from "../contexts/CaughtPokemonContext";

const PokemonListItem = (props) => {
  let url = props.pokemon.url;
  let splitted = url.split("/");
  let id = splitted[splitted.length - 2];
  let link = `/pokemon/${id}`;

  const [picture, setPicture] = useState("");
  const [pokemonId] = useState(id);
  const [caughtPokemons, setCaughtPokemons] = useContext(CaughtPokemonContext);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => {
        setPicture(response.data.sprites.other["official-artwork"].front_default);
      })
  }, [pokemonId])

  const catchPokemon = () => {
    setCaughtPokemons([...caughtPokemons, {"pokemonId": id, "image": picture, "name": props.pokemon.name}]);
  }

  return (
    <Card>
      <img src={picture} alt="pokemon" style={imageStyle} />
      <p><Link to={link} style={linkStyle}>{props.pokemon.name}</Link></p>
      <p><button onClick={catchPokemon}>Catch!</button></p>
    </Card>
  );
};

export default PokemonListItem;

const imageStyle = {
  width: '80px'
}

const linkStyle = {
  textDecoration: 'none'
}