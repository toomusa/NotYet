
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import "./style.css";

class Explorer extends Component {

    render() {
        return (
          <div>
            <Field>Explorer</Field>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {state};
}

export default compose(
    connect(mapStateToProps, {}),
    reduxForm({})
)(Explorer);