import React, { Component } from "react";
import axios from "axios";
import Abilities from "./pokemondetails/Abilities";

export class PokemonDetails extends Component {
  state = {
    abilities: [],
    picture: "",
    name: "",
    pokemonId: ""
  };

  componentDidMount() {
    let path = window.location.pathname;
    let id = path.split("/")[path.split("/").length - 1];
    this.setState({pokemonId: id})
    let link = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios.get(link).then((response) =>
      this.setState({
        abilities: response.data.abilities,
        picture: response.data.sprites.other["official-artwork"].front_default,
        name: response.data.forms[0].name,
      })
    );
  }

  render() {
    return (
      <div>
        <img src={this.state.picture} alt="pokemon" />
    <p>Name: {this.state.name}</p>
    <p>Abilities:</p>
    <Abilities abilities={this.state.abilities} id={this.state.pokemonId} />
      </div>
    );
  }
}

export default PokemonDetails;
