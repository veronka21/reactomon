import styled from 'styled-components';
import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';


const Details = (props) => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    const Details = styled.div`
    background: ${(darkMode ? "#191736" : "#faf87d")};
    border: 8px ridge #3d7dca;
    padding: 20 px;
    border-radius: 20%;
    width: 12%;
    margin: 20px;
    position: absolute;
    left: 42%
    `
    return <Details>{props.children}</Details>
}

export default Details;