import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul>
      <li>
          <Link className="navbar-brand" to="/profile">
            Profile
        </Link></li>
        <li>
          <Link className="navbar-brand" to="/dashboard">
            Dashboard
        </Link></li>
        <li>
          <Link className="navbar-brand" to="/explorer">
            Explorer
        </Link></li>
        <li>
          <Link className="navbar-brand logoutSubmit" to="/signout">
            Logout
        </Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;