import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <h1>GenZ</h1>

      <nav>
        <Link to="/" className="button">
          Posts
        </Link>

        <Link to="/users" className="button">
          Users
        </Link>

        <Link to="/notifications" className="button">
          Notifications
        </Link>

        <Link to="/add-post" className="button">
          Add Post
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;