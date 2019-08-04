
import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul>
        <li>
          <a className="navbar-brand" href="/">
            Dashboard
        </a></li>
        <li>
          <a className="navbar-brand" href="/">
            Explorer
        </a></li>
        <li>
          <a className="navbar-brand" href="/">
            Logout
        </a></li>
      </ul>
    </nav>
  )
}

export default Navbar;