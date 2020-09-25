import React from "react";
import { Link } from "react-router-dom";

const PokemonListItem = (props) => {
  let url = props.pokemon.url;
  let splitted = url.split("/");
  let id = splitted[splitted.length - 2];
  let link = `/pokemon/${id}`;
  return (
    <li>
      <Link to={link}>{props.pokemon.name}</Link>
    </li>
  );
};

export default PokemonListItem;
