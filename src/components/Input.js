import React from "react";

function Input(props) {
  return <input type={props.type} onChange={props.onChange} />;
}

export default Input;