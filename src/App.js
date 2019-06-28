import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./containers/login";
import HomePage from "./containers/home";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
