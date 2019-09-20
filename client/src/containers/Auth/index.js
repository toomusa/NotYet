
import React, { Component } from "react";
import Signin from "./SignIn";
import Signup from "./SignUp";
import { compose } from "redux";
import { connect } from "react-redux";
// import Header from "../../components/Header"

class Auth extends Component {

  constructor(props) {
    super(props);

    this.state = {
      btn: true,
    };

    this.renderSignin = this.renderSignin.bind(this);
    this.renderSignup = this.renderSignup.bind(this);
  }

  renderSignup() {
    this.setState({ btn: false })
  }

  renderSignin() {
    this.setState({ btn: true })
  }

  render() {
    return (
      <div >
        <div className="modal-block" id="authModal">
          <div className="modal-brand">
            <div className="modal-brand-caption">
              <div className="logo">
                <h1>N</h1><span> <h1>O</h1></span><span><h1>T</h1></span><span><h1>Y</h1></span><span><h1>E</h1></span><span><h1>T</h1></span>
              </div>
            </div>
          </div>
          <div className="modal-block-content" >
            <br></br>
            <button id="stylingButton" className="btn btn-primary"></button>
            {/* this one is not rly a button ^ it's to fill empty space*/}
            <button id="loginButtonT" className="btn btn-primary" onClick={this.renderSignin}>LOGIN</button>
            <button id="signupButton" className="btn btn-primary" onClick={this.renderSignup}>REGISTER</button>

            {(this.state.btn) ? <Signin socket={this.props.socket} /> : <Signup socket={this.props.socket} />}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

export default compose(
  connect(mapStateToProps, {}),
)(Auth);