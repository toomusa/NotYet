
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import requireAuth from "../hoc/requireAuth";
import "./style.css";

class Channels extends Component {

    render() {
        return (
          <div>
            <Field>Channels</Field>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {state};
}

const formedComponent = compose(
  connect(mapStateToProps, {}),
  reduxForm({})
)(Channels);

export default requireAuth(formedComponent);