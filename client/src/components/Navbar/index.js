// import React from "react";
// import "./style.css";

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementsByClassName("navbar");

// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <ul>
//         <li>
//           <a className="navbar-brand" href="/Dashboard">
//             Dashboard
//         </a></li>
//         <li>
//           <a className="navbar-brand" href="/Explorer">
//             Explorer
//         </a></li>
//         <li>
//           <a className="navbar-brand logoutSubmit" href="/SignOut">
//             Logout
//         </a></li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar;

import React from "react";
import { Link } from 'react-router-dom'

// import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import requireAuth from "../hoc/requireAuth";
import "./style.css";

// class Channels extends Component {
const Navbar = props => (
  // <div>
  // <Field>Channels</Field> 
  // </div>
  <div id="navbar">
    <div className="table">
    <ul className="navbar-menu" id="horizontal-list">
      <li><Link to={"/dashboard"}>Dashboard</Link></li>
      <li><Link to="/explorer">Explorer</Link></li>
      <li><Link to="" className=" iconImage"><img src="https://img.icons8.com/cotton/2x/search--v1.png" alt=""></img></Link></li>
      <li><Link to="/profile" className=" iconImage"><img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt=""></img></Link></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
    </div>
  </div>
);

// function mapStateToProps(state) {
//   return { state };
// }

// const formedComponent = compose(
//   connect(mapStateToProps, {}),
//   reduxForm({})
// )(Channels);

// export default requireAuth(formedComponent);

export default Navbar;