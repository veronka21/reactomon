import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class PokemonListItem extends Component {
  render() {
    let url = this.props.pokemon.url;
    let splitted = url.split("/");
    let id = splitted[splitted.length - 2];
    let link = `/pokemon/${id}`;
    return (
      <li>
        <Link to={link}>{this.props.pokemon.name}</Link>
      </li>
    );
  }
}

export default PokemonListItem;
