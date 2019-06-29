import React from "react";

const inputStyle = {
  width: 500,
  margin: "auto",
  height: 20
};

function Input(props) {
  return (
    <input
      type={props.type}
      onChange={props.onChange}
      style={inputStyle}
      placeholder={props.label}
    />
  );
}

export default Input;
