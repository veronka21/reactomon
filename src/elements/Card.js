import styled from 'styled-components';
import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';


const Card = (props) => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    const Card = styled.div`
    background: ${(darkMode ? "#191736" : "#faf87d")};
    border: 8px ridge #3d7dca;
    padding: 20 px;
    border-radius: 20%;
    width: 12%;
    display: block;
    margin: 20px;
`
    return <Card>{props.children}</Card>
}

export default Card;