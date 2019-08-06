
import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul>
        <li>
          <a className="navbar-brand" href="/Dashboard">
            Dashboard
        </a></li>
        <li>
          <a className="navbar-brand" href="/Explorer">
            Explorer
        </a></li>
        <li>
          <a className="navbar-brand logoutSubmit" href="/SignOut">
            Logout
        </a></li>
      </ul>
    </nav>
  )
}

export default Navbar;