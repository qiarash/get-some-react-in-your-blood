import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <p> Welcome to the Homepage!</p>
      <button>
        <Link to="/login">Login Page</Link>
      </button>
    </div>
  );
}

export default HomePage;
