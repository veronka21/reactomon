import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header style={headerStyle}>
      <p>
        <a href="https://fontmeme.com/pokemon-font/">
          <img
            src="https://fontmeme.com/permalink/200923/0a2e87f0b608ca69c930c125a401e40a.png"
            alt="pokemon-font"
            border="0"
          ></img>
        </a>
      </p>
      <Link style={linkStyle} to="/pokemons">
        Pokemons
      </Link>
      <Link style={linkStyle} to="/types">
        Types
      </Link>
    </header>
  );
}

export default Navbar;

const headerStyle = {
  background: "#9c9b94",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  textDecoration: "none",
  background: "#3d7dca",
  color: "#ffcb05",
  padding: "4px",
  borderRadius: "40%",
  margin: "20px",
};
