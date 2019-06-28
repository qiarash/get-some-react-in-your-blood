import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./containers/login";
import HomePage from "./containers/home";

const divStyle = {
  padding: 50,
  textAlign: "center"
};

function App() {
  return (
    <Router>
      <div style={divStyle}>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
