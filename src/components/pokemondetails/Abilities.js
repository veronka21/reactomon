import React, { Component } from 'react'

export class Abilities extends Component {
    render() {
        return (this.props.abilities.map(ability => (
        <li key={this.props.id}>{ability.ability.name}</li>
        ))
        )
    }
}

export default Abilities
