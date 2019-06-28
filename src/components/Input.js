import React from "react";

function Input(props) {
  return (
    <div>
      <input type={props.type} onChange={props.onChange} />
    </div>
  );
}

export default Input;
