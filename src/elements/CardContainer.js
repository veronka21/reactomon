import styled from 'styled-components';
import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import Background from '../images/pokemonbg.png'

const CardContainer = (props) => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    const background = darkMode ? "" : `url(${Background})`;

    const FormattedDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background: ${(darkMode ? "#5c3131" : "white")};
    background-image: ${background};
    `

return <FormattedDiv>{props.children}</FormattedDiv>;
}

export default CardContainer;

// background-image: url(${Background});
// background: ${(darkMode ? "black" : "darkgrey")};
// background-image: ${(darkMode ? "" : "url('https://wallpaper-house.com/data/out/7/wallpaper2you_147631.png')")};