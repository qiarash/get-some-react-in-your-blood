import React from "react";

function Submit(props) {
  return <button onClick={props.onClick}>{props.value}</button>;
}

export default Submit;
