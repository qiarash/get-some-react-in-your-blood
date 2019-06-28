import React from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import LoginPage from "./containers/login";

function App() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <p> Welcome to the Homepage!</p>
      <ul>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
