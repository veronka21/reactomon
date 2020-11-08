import styled from 'styled-components';
import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import Background from '../images/pokemonbg.png'

const CardContainer = (props) => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    const background = darkMode ? "" : `url(${Background})`;

    const color = darkMode ? "#5c3131" : "white";
    
    return <FormattedDiv color={color} background={background}>{props.children}</FormattedDiv>;
}

export default CardContainer;

const FormattedDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background: ${props => props.color};
    background-image: ${props => props.background};
    `

// background-image: url(${Background});
// background: ${(darkMode ? "black" : "darkgrey")};
// background-image: ${(darkMode ? "" : "url('https://wallpaper-house.com/data/out/7/wallpaper2you_147631.png')")};