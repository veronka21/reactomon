import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Pokemons from "./components/Pokemons";
import Types from "./components/Types";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Navbar />
            <Route exact path="/" render={(props) => (
              <React.Fragment>
                <p>main page</p>
              </React.Fragment>
            )} />
            <Route path="/pokemons" component={Pokemons} />
            <Route path="/types" component={Types} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
