import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin } from "../../actions/authActions";
// import "./style.css";

class Signin extends Component {

    renderInput = ({ input }) => {
        console.log(input); 
        return <input {...input}   />
    }

    onSubmit = formValues => {
        this.props.signin(formValues, () => {
            this.props.history.push("/counter");
        })
    }

    render () {
        console.log("yeee");
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}> 
                <fieldset>
                    <Field 
                        name="email"
                        type="text" 
                        label="email"
                        component={this.renderInput}
                    />
                </fieldset>
                <fieldset>
                    <Field 
                        name="password"
                        type="password" 
                        label="password"
                        component={this.renderInput}
                    />
                </fieldset>
                <button>Signin</button>
                <div>
                    {this.props.errorMessage}
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default compose(
    connect(mapStateToProps, { signin }),
    reduxForm({ form: "signin" })
)(Signin);
