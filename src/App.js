import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from "./containers/login";

function App() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <p> Welcome to the Homepage!</p>
      <Router>
        <div>
          <nav>
            <Link to="/login">LOGIN PAGE</Link>
          </nav>
          <Route path="/login" exact component={LoginPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
