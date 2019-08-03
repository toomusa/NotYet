import React, { Component } from 'react'
import Signin from "./SignIn";
import Signup from "./SignUp";

export default class Auth extends Component {
  render() {
    return (
      <div>
      <div>
        <Signin />
      </div>
      <div>
        <Signup />
      </div>
      </div>
    )
  }
}
