import React from "react";

const buttonStyle = {
  height: 25,
  width: 100,
  display: "inline-block",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #008CBA",
  borderRadius: "4px"
};

function Submit(props) {
  return (
    <button onClick={props.onClick} style={buttonStyle}>
      {props.value}
    </button>
  );
}

export default Submit;
