import React from "react";

const Types = (props) => {
  return props.types.map((type) => <li key={type.url} style={typeStyle}>{type.name}</li>);
};

export default Types;

const typeStyle = {
  listStyleType: 'none',
  padding: '4px'
}