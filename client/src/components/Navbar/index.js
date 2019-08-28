
import React from "react";
import { Link, Redirect } from 'react-router-dom'
import "./style.css";

const Navbar = () => (
  <div id="navbar">
    <ul className="navbar-menu" id="horizontal-list">
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/explorer">Explorer</Link></li>
      <li><Link to="/profile" className="iconImage"><img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt=""></img>Profile</Link></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  </div>
);

export default Navbar;