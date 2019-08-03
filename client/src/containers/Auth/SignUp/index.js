import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signup } from "../../../actions/authActions";
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
        // console.log(meta);
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
            console.log("BAck in signup")
            console.log(this.props)
            this.props.history.push("/dashboard");
        })
    }


    render() {
        // console.log(this.props)
        const { handleSubmit } = this.props;
        return(
          <div className="modal-block">
          <div className="modal-brand">
            <div className="modal-brand-caption">
              <div className="logo">
                <h1>V</h1><span> <h1>I</h1></span><span> <h1>D</h1></span><span><h1>I</h1></span>
              </div>
            </div>
          </div>
          <div className="modal-block-content">
            <h3>Register Today!</h3>
            <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit)}>
              <div className="form-group">
                <label for="email">EMAIL</label>
                {/* <input type="email" name="email" id="email" className="email form-control" /> */}
                <fieldset>
                <Field 
                  name="email"
                  type="email" 
                  id="email"
                  className="email form-control"
                  component={this.renderInput}
                />
                </fieldset>
              </div>
              <div className="form-group">
                <label for="password">PASSWORD</label>
                {/* <input type="password" name="password" id="password" className="form-control" /> */}
                <fieldset>
                <Field 
                  name="password"
                  type="password" 
                  className="form-control"
                  component={this.renderInput}
                />
                </fieldset>
              </div>
              <div className="form-group">
                {/* <p className="help-block"><a href="/" className="link-underline">FORGOT YOUR PASSWORD?</a></p> */}
                {/* <p className="help-block2 mb-25">Already registered? Login <a href="/" className="clr-primary link-underline">here</a>.</p> */}
                <button type="submit" className="btn btn-block btn-radius btn-primary">REGISTER</button>
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

const validate = formValues => {
    const error = {};
    // console.log("validator", formValues);

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
    connect(mapStateToProps, { signup }),
    reduxForm({ 
        form: "signup",
        validate 
    })
)(Signup);





// return (
//   <form onSubmit={handleSubmit(this.onSubmit)}> 
//       <fieldset>
//           <Field 
//               name="email"
//               type="text" 
//               label="email"
//               component={this.renderInput}
//               autoComplete="none"    
//           />
//       </fieldset>
//       <fieldset>
//           <Field 
//               name="password"
//               type="password" 
//               label="password"
//               component={this.renderInput}
//               autoComplete="none"    
//           />
//       </fieldset>
//       <button>Signup</button>
//   </form>
// )




// import React from "react";

// const SignUp = props => (

//   <div className="modal-block">
//     <div className="modal-brand">
//       <div className="modal-brand-caption">
//         <div className="logo">
//           <h1>V</h1><span> <h1>I</h1></span><span> <h1>D</h1></span><span><h1>I</h1></span>
//         </div>
//       </div>
//     </div>
//     <div className="modal-block-content">
//       <h3>Register Today!</h3>
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
//           <p className="help-block2 mb-25">Already registered? Login <a href="/" className="clr-primary link-underline">here</a>.</p>
//           <button type="submit" className="btn btn-block btn-radius btn-primary">REGISTER</button>
//         </div>
//       </form>
//     </div>
//   </div>
// );

// export default SignUp; 