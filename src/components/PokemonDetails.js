import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Abilities from "./pokemondetails/Abilities";
import Details from '../elements/Details';
import { DarkModeContext } from "../contexts/DarkModeContext";
import { CaughtPokemonContext } from "../contexts/CaughtPokemonContext";

const PokemonDetails = (props) => {
  const [abilities, setAbilities] = useState([]);
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [pokemonId, setPokemonId] = useState("");
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [caughtPokemons, setCaughtPokemons] = useContext(CaughtPokemonContext);

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

  const catchPokemon = () => {
    setCaughtPokemons([...caughtPokemons, {"pokemonId": pokemonId, "image": picture}])
  }

  const detailStyle = {
    background: darkMode ? "#5c3131" : "white",
    backgroundImage: darkMode ? "" : "url('https://i.pinimg.com/originals/3c/07/4a/3c074a911d21959311672c676c226812.jpg')"
  }

  return (
    <div style={detailStyle}>
      <img src={picture} alt="pokemon" style={imageStyle} />
      <p><button onClick={catchPokemon}>Catch!</button></p>
      <Details><p>Name: {name}</p>
      <p>Abilities:</p>
      <Abilities abilities={abilities} id={pokemonId} /></Details>
    </div>
  );
};

export default PokemonDetails;

const imageStyle = {
  width: '370px'
}