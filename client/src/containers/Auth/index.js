import React, { Component } from 'react'
import Signin from "./SignIn";
// import Signup from "./SignUp";

// let loggedInUser = localStorage.getItem("token");

export default class Auth extends Component {
  render() {
    return (
      <Signin/>
    )
  }
}
