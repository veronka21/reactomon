import styled from 'styled-components';
import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';


const Details = (props) => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    const color = darkMode ? "#191736" : "#faf87d";

    return <DetailsStyle color={color}>{props.children}</DetailsStyle>
}

const DetailsStyle = styled.div`
background: ${props => props.color};
border: 8px ridge #3d7dca;
padding: 20 px;
border-radius: 20%;
width: 12%;
margin: 20px;
position: absolute;
left: 42%
`
export default Details;