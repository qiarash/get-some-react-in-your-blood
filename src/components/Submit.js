import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";

function Submit(props) {
  return (
    <Router>
      <li>
        <Link to="/">
          <button onClick={props.onClick}>Login!</button>
        </Link>
      </li>
      <Route path="/" exact component={App} />
    </Router>
  );
}

export default Submit;
