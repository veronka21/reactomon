import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import axios from 'axios';
import PokemonDetails from "./components/PokemonDetails";

class App extends Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
      .then((response) => this.setState({ pokemons: response.data.results }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Navbar />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <a href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/200923/64a5747ca4c11cd909788e77c68af367.png" alt="pokemon-font" border="0"></img></a>
                </React.Fragment>
              )}
            />
            <Route path="/pokemons" render={(props) => (
              <React.Fragment>
                <PokemonList pokemons={this.state.pokemons} />
              </React.Fragment>
            )} />
            <Route path="/types" component={TypeList} />
            <Route path="/pokemon" render={(props) => (
              <React.Fragment>
                <PokemonDetails />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
