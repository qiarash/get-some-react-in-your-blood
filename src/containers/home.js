import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p> Welcome to the Homepage!</p>
      <button>
        <Link to="/login">Login Page</Link>
      </button>
    </div>
  );
}

export default HomePage;
