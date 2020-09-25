import React from "react";

const Types = (props) => {
  return props.types.map((type) => <li key={type.url}>{type.name}</li>);
};

export default Types;
