import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signup } from "../../../actions/authActions";
import { InputField } from "../../../components/InputField";
import validator from "validator";
import { loadUser } from "../../../actions/dbActions"
import "./style.css";
import history from "../../../history";

class SignUp extends Component {

  renderErrors = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderErrors(meta)}
      </div>
    )
  }

  onSubmit = formProps => {
    this.props.signup(formProps, (userData) => {
      this.props.loadUser(userData)
      history.push("/dashboard");
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h3>Register Today!</h3>
          <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit)}>
            <div className="form-group">
              <label for="email" id="labelColor">EMAIL</label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  className="inputBox form-control"
                  component={InputField}
                />
            </div>
            <div className="form-group">
              <label for="username" id="labelColor">USERNAME</label>
                <Field
                  name="username"
                  type="username"
                  id="username"
                  className="inputBox form-control"
                  component={InputField}
                />
            </div>
            <div className="form-group">
              <label for="password" id="labelColor">PASSWORD</label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  className="inputBox form-control"
                  component={InputField}
                />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-block btn-radius btn-primary registerSubmit" id="submitBtn">REGISTER</button>
            </div>
          </form>
       </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

const validate = formValues => {
  const error = {};

  if (!formValues.email) {
    error.email = "You must enter an email";
  }

  if (formValues.email) {
    if (!validator.isEmail(formValues.email)) {
      error.email = "You must enter a valid email address";
    }
  }

  if (!formValues.password) {
    error.email = "You must enter a password";
  }
  return error;
}

export default compose(
  connect(mapStateToProps, { signup, loadUser }),
  reduxForm({
    form: "signup",
    validate
  })
)(SignUp);
