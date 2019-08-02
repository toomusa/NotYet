
import React from "react";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">
           Not Yet 
        </a>
        <a className="navbar-brand" href="/dashboard">
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