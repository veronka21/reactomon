import React from 'react';
import Card from "../elements/Card";

function CaughtPokemon(props) {

    return (
        <Card>
          <img src={props.pokemon.image} alt="pokemon" style={imageStyle} />
          <p>{props.pokemon.name}</p>
        </Card>
      );
}


const imageStyle = {
    width: '80px'
  }

export default CaughtPokemon
