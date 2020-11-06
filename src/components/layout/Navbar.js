import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../contexts/DarkModeContext';
import styled from 'styled-components';

function Navbar() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  // const [backGroundColor, setBackGroundColor] = useState(darkMode ? "black" : "#faf87d");

  const switchTheme = () => {
    setDarkMode(darkMode ? false : true);
  }

  const Header = styled.header`
  background: ${(darkMode ? "#291515" : "#faf87d")};
  color: #fff;
  textAlign: center;
  padding: 10px
`

  return (
    <Header>
      <button style={buttonStyle} onClick={switchTheme}>Theme switcher</button>
        <a href="https://fontmeme.com/pokemon-font/">
          <img
            src="https://fontmeme.com/permalink/200923/0a2e87f0b608ca69c930c125a401e40a.png"
            alt="pokemon-font"
          ></img>
        </a>
      <br/>
      <br/>
      <Link style={linkStyle} to="/pokemons">
        Pokemons
      </Link>
      <Link style={linkStyle} to="/types">
        Types
      </Link>
      <br/>
      <br/>
    </Header>
  );
}

export default Navbar;

const linkStyle = {
  textDecoration: "none",
  background: "#3d7dca",
  color: "#ffcb05",
  padding: "4px",
  borderRadius: "40%",
  margin: "20px",
};

const buttonStyle = {
  position: "absolute",
  right: "0",
  top: "0",
  margin: "10px"
  // float: 'right'
}