import React, { Component } from 'react'

export class Types extends Component {
    render() {
        return (
            this.props.types.map(type => (
            <li key={type.url}>{type.name}</li>
            ))
        )
    }
}

export default Types
