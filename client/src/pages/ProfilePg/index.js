
import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import requireAuth from "../hoc/requireAuth";
import "./style.css";
import Profile from "./../../containers/Profile"
import Brand from "../../components/Brand";
import Grid from "../../components/Grid";
import MediaSearch from "../../components/MediaSearch";
import Channels from "../../containers/Channels";
import Navbar from "../../components/Navbar";

class ProfilePg extends Component {

    render() {
        return (
          <div>
            <Brand title='VIDI' />
            <Grid>
                <MediaSearch />
                <Navbar />
                <Channels />
                <Profile/>
            </Grid>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {state};
}

// const formedComponent = compose(
//   connect(mapStateToProps, {}),
//   reduxForm({})
// )(ProfilePg);

export default ProfilePg;