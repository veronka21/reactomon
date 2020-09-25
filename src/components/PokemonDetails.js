import React, { useState, useEffect } from "react";
import axios from "axios";
import Abilities from "./pokemondetails/Abilities";

const PokemonDetails = (props) => {
  const [abilities, setAbilities] = useState([]);
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [pokemonId, setPokemonId] = useState("");

  useEffect(() => {
    let path = window.location.pathname;
    let id = path.split("/")[path.split("/").length - 1];
    setPokemonId(id);
    let link = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios.get(link).then((response) => {
      setAbilities(response.data.abilities);
      setPicture(response.data.sprites.other["official-artwork"].front_default);
      setName(response.data.forms[0].name);
    });
  }, []);

  return (
    <div>
      <img src={picture} alt="pokemon" />
      <p>Name: {name}</p>
      <p>Abilities:</p>
      <Abilities abilities={abilities} id={pokemonId} />
    </div>
  );
};

export default PokemonDetails;
