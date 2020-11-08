import styled from 'styled-components';
import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Header = (props) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const color = darkMode ? "#291515" : "#faf87d";
  
  return <HeaderStyle color={color}>{props.children}</HeaderStyle>
} 

export default Header;

const HeaderStyle = styled.header`
  background: ${props => props.color};
  color: #fff;
  textalign: center;
  padding: 10px;
`