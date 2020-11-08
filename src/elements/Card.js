import styled from 'styled-components';
import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';


const Card = (props) => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    const color = darkMode ? "#191736" : "#faf87d";

    return <CardStyle color={color}>{props.children}</CardStyle>
}

export default Card;

const CardStyle = styled.div`
background: ${props => props.color};
border: 8px ridge #3d7dca;
padding: 20 px;
border-radius: 20%;
width: 12%;
display: block;
margin: 20px;
`