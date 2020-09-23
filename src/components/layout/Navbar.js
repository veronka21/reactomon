import React from 'react'

function Navbar() {
    return (
        <header style={headerStyle}>
            <p><a href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/200923/0a2e87f0b608ca69c930c125a401e40a.png" alt="pokemon-font" border="0"></img></a></p>
        </header>
    )
}

export default Navbar;

const headerStyle = {
    background: '#9c9b94',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}