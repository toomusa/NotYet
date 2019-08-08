import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin } from "../../../actions/authActions";
import { InputField } from "../../../components/InputField"
import { Link } from 'react-router-dom';
import "./style.css";
import history from "../../../history";

class SignIn extends Component {

  renderInput = ({ input }) => {
    console.log(input);
    return <input {...input} />
  }

  onSubmit = formValues => {
    this.props.signin(formValues, () => {
      history.push("/dashboard");
    })
  }

  render() {
    // console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <div className="modal-block">
        <div className="modal-brand">
          <div className="modal-brand-caption">
            <div className="logo">
              <h1>V</h1><span> <h1>I</h1></span><span><h1>D</h1></span><span><h1>I</h1></span>
            </div>
          </div>
        </div>
        <div className="modal-block-content">
          <h3>Welcome Back!</h3>
          <button id="stylingButton" className="btn btn-primary"></button>
          {/* this one is not rly a button ^ it's to fill empty space*/}
          <Link className="login" to="/signin"><button id="loginButtonT" type="submit" className="btn btn-primary">LOGIN</button></Link>
          <Link className="register" to="/signup"><button id="signupButton" type="submit" className="btn btn-primary">REGISTER</button></Link>

          <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <div className="form-group">
                <label for="email">EMAIL</label>
                {/* <input type="email" name="email" id="email" className="email form-control" /> */}
                <Field
                  name="email"
                  type="text"
                  id="email"
                  className="email form-control loginEmail"
                  component={InputField}
                // component={renderInput} birna: I had to make a seperate component and grab input that way for the styling to work
                // go check it out, should work the same
                />
              </div>
              <div className="form-group">
                <label for="password">PASSWORD</label>
                {/* <input type="password" name="password" id="password" className="form-control" /> */}
                <Field
                  name="password"
                  type="password"
                  id="password"
                  className="form-control loginPassword"
                  component={InputField}
                // component={renderInput} birna: I had to make a seperate component and grab input that way for the styling to work
                // go check it out, should work the same
                />
              </div>
            </fieldset>
            <div className="form-group">
              {/* <p className="help-block"><a href="/" className="link-underline">FORGOT YOUR PASSWORD?</a></p>
                    <p className="help-block2 mb-25">Need an account? Register <a href="/users/register" className="clr-primary link-underline">here</a>.</p> */}
              <button type="submit" className="btn btn-block btn-radius btn-primary loginSubmit">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, { signin }),
  reduxForm({ form: "signin" })
)(SignIn);






// return (
//   <form onSubmit={handleSubmit(this.onSubmit)}> 
//       <fieldset>
//           <Field 
//               name="email"
//               type="text" 
//               label="email"
//               component={this.renderInput}
//           />
//       </fieldset>
//       <fieldset>
//           <Field 
//               name="password"
//               type="password" 
//               label="password"
//               component={this.renderInput}
//           />
//       </fieldset>
//       <button>Signin</button>
//       <div>
//           {this.props.errorMessage}
//       </div>
//   </form>
// )


// import React from "react";

// const SignIn = props => (

//   <div className="modal-block">
//     <div className="modal-brand">
//       <div className="modal-brand-caption">
//         <div className="logo">
//           <h1>V</h1><span> <h1>I</h1></span><span><h1>D</h1></span><span><h1>I</h1></span>
//         </div>
//       </div>
//     </div>
//     <div className="modal-block-content">
//       <h3>Welcome Back!</h3>
//       <form className="form-horizontal" action="/users/login" method="POST">
//         <div className="form-group">
//           <label for="email">EMAIL</label>
//           <input type="email" name="email" id="email" className="email form-control" />
//         </div>
//         <div className="form-group">
//           <label for="password">PASSWORD</label>
//           <input type="password" name="password" id="password" className="form-control" />
//         </div>
//         <div className="form-group">
//           <p className="help-block"><a href="/" className="link-underline">FORGOT YOUR PASSWORD?</a></p>
//           <p className="help-block2 mb-25">Need an account? Register <a href="/users/register" className="clr-primary link-underline">here</a>.</p>
//           <button type="submit" className="btn btn-block btn-radius btn-primary">LOGIN</button>
//         </div>
//       </form>
//     </div>
//   </div>
// );

// export default SignIn; 