import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import axios from "axios";
import PokemonDetails from "./components/PokemonDetails";
import CardContainer from "./elements/CardContainer";
import Card from "./elements/Card";
import CaughtPokemonList from "./components/CaughtPokemonList";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { CaughtPokemonProvider } from "./contexts/CaughtPokemonContext";

const App = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=36")
      .then((response) => setPokemons(response.data.results));
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((response) => setTypes(response.data.results));
  }, []);

  // const CardContainer2 = styled.div`
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: space-evenly;
  //   align-items: center;
  //   background: darkgray;
  //   background-image: ${darkMode
  //     ? ""
  //     : "url('https://wallpaper-house.com/data/out/7/wallpaper2you_147631.png')"};
  // `;

  return (
    <Router>
      <DarkModeProvider>
        <CaughtPokemonProvider>
          <div className="App">
            <div className="container">
              <Navbar />
              <CardContainer>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <React.Fragment>
                      <a href="https://fontmeme.com/pokemon-font/">
                        <img
                          src="https://fontmeme.com/permalink/200923/64a5747ca4c11cd909788e77c68af367.png"
                          alt="pokemon-font"
                          border="0"
                        ></img>
                      </a>
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/pokemons"
                  render={(props) => (
                    <React.Fragment>
                      <PokemonList pokemons={pokemons} />
                    </React.Fragment>
                  )}
                />

                <Route
                  path="/types"
                  render={(props) => (
                    <Card>
                      <React.Fragment>
                        <TypeList types={types} />
                      </React.Fragment>
                    </Card>
                  )}
                />
              </CardContainer>
              <Route
                path="/pokemon"
                render={(props) => (
                  <React.Fragment>
                    <PokemonDetails />
                  </React.Fragment>
                )}
              />
              <CardContainer>
                <Route
                  path="/caught"
                  render={(props) => (
                    <React.Fragment>
                      <CaughtPokemonList />
                    </React.Fragment>
                  )}
                />
              </CardContainer>
            </div>
          </div>
        </CaughtPokemonProvider>
      </DarkModeProvider>
    </Router>
  );
};

export default App;
