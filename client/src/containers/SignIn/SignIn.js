import React from "react";
import "./SignIn.css";

const SignIn = props => (

  <div className="modal-block">
    <div className="modal-brand">
      <div className="modal-brand-caption">
        <div className="logo">
          <h1>V</h1><span> <h1>I</h1></span><span> <h1>D</h1></span><span><h1>I</h1></span>
        </div>
      </div>
    </div>
    <div className="modal-block-content">
      <h3>Welcome Back!</h3>
      <form className="form-horizontal" action="/users/login" method="POST">
        <div className="form-group">
          <label for="email">EMAIL</label>
          <input type="email" name="email" id="email" className="email form-control" />
        </div>
        <div className="form-group">
          <label for="password">PASSWORD</label>
          <input type="password" name="password" id="password" className="form-control" />
        </div>
        <div className="form-group">
          <p className="help-block"><a href="/" className="link-underline">FORGOT YOUR PASSWORD?</a></p>
          <p className="help-block2 mb-25">Need an account? Register <a href="/users/register" className="clr-primary link-underline">here</a>.</p>
          <button type="submit" className="btn btn-block btn-radius btn-primary">LOGIN</button>
        </div>
      </form>
    </div>
  </div>
);

export default SignIn; 