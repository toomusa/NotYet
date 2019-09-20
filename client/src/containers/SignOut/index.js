import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../../actions/authActions";
import history from '../../history';

class Signout extends Component {

    componentDidMount() {
        this.props.signout()
        history.push("/");
    }

    render() {
        return <h1>Sorry to see you go</h1>
    }
}

export default connect(null, {signout})(Signout);
