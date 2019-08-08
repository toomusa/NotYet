
import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import requireAuth from "../hoc/requireAuth";
import "./style.css";
import Header2 from "../../components/Header2";
import Profile from "./../../containers/Profile"
import Grid from "../../components/Grid";
// import MediaSearch from "../../components/MediaSearch";
import Channels from "../../containers/Channels";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class ProfilePg extends Component {

    render() {
        return (
            <div>
                <Grid>
                    {/* <MediaSearch /> */}
                    <Header2 />
                    <Navbar />
                    <Channels />
                    <Profile />
                    <Footer />
                </Grid>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {state};
// }

// const formedComponent = compose(
//   connect(mapStateToProps, {}),
//   reduxForm({})
// )(ProfilePg);

export default ProfilePg;