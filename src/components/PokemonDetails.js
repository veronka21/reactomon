import React, { Component } from "react";
import axios from "axios";

export class PokemonDetails extends Component {
    state = {
        abilities: [],
        picture: ""
    }

  componentDidMount() {
    let path = window.location.pathname;
    let id = path.split("/")[path.split("/").length - 1];
    let link = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios.get(link)
    .then(response => this.setState({abilities : response.data.abilities, picture : response.data.sprites.other.["official-artwork"].front_default}));
  }

  render() {
    return <div>
        <img src={this.state.picture} alt=""/>
    </div>;
  }
}

export default PokemonDetails;
