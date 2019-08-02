import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signup, testDispatch } from "../../actions/authActions";
import validator from "validator";
import "./style.css";


class Signup extends Component {

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
        console.log(meta);
        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderErrors(meta)}
            </div>
        )
    }

    onSubmit = formProps => {
        console.log(formProps)
        this.props.signup(formProps, () => {
            this.props.history.push("/counter");
        })
    }

    render() {
        console.log(this.props)
        const { handleSubmit, testDispatch } = this.props;
        return (
            <React.Fragment>
            <form onSubmit={handleSubmit(this.onSubmit)}> 
                <fieldset>
                    <Field 
                        name="email"
                        type="text" 
                        label="email"
                        component={this.renderInput}
                        autoComplete="none"    
                    />
                </fieldset>
                <fieldset>
                    <Field 
                        name="password"
                        type="password" 
                        label="password"
                        component={this.renderInput}
                        autoComplete="none"    
                    />
                </fieldset>
                <button>Signup</button>
            </form>
            <button onClick={testDispatch}></button>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

const validate = formValues => {
    const error = {};
    console.log("validator", formValues);

    if (!formValues.email) {
        error.email = "You must enter an email";
    }

    if(formValues.email) {
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
    connect(mapStateToProps, { signup, testDispatch }),
    reduxForm({ 
        form: "signup",
        validate 
    })
)(Signup);