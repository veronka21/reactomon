import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from '../elements/Card';

const PokemonListItem = (props) => {
  let url = props.pokemon.url;
  let splitted = url.split("/");
  let id = splitted[splitted.length - 2];
  let link = `/pokemon/${id}`;

  const [picture, setPicture] = useState("");
  const [pokemonId] = useState(id);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => {
        setPicture(response.data.sprites.other["official-artwork"].front_default);
      })
  }, [pokemonId])

  return (
    <Card>
      <img src={picture} alt="pokemon" style={imageStyle} />
      <p><Link to={link} style={linkStyle}>{props.pokemon.name}</Link></p>
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