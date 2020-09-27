import React, { useState, createContext } from 'react';

export const DarkModecontext = createContext();

export const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <DarkModecontext.Provider value={[darkMode, setDarkMode]}>
            {props.children}
        </DarkModecontext.Provider>
    )
}