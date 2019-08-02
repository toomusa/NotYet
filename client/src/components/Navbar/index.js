
import React from "react";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand text-bold" id="appname" href="/home">
           Not Yet 
        </a>
        <a className="navbar-brand offset-md-8" href="/dashboard">
          Dashboard 
        </a>
        <a className="navbar-brand" href="/profile">
          Profile 
        </a>
        <a className="navbar-brand" href="/new">
          + New Channel 
        </a>
      </nav>
    )
}

export default Navbar;