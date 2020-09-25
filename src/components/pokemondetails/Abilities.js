import React from "react";

const Abilities = (props) => {
  let key = `a${props.id}`;
  return props.abilities.map((ability) => (
    <li key={key}>{ability.ability.name}</li>
  ));
};

export default Abilities;
