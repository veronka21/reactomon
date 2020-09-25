import React, { Component } from 'react'

export class Abilities extends Component {
    render() {
        let key = `a${this.props.id}`
        return (this.props.abilities.map(ability => (
        <li key={key}>{ability.ability.name}</li>
        ))
        )
    }
}

export default Abilities
