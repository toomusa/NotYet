
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import "./style.css";

import Grid from "../../components/Grid";
import Channels from "../../containers/Channels";
import Movies from "../../containers/Movies";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
class Explorer extends Component {

    render() {
        return (
          <div>
            {/* <Brand title='VIDI' /> */}
            <Grid>
              <Header />
                {/* <Auth/> */}
                {/* <MediaSearch /> */}
                <Navbar />
                <Channels />
                {/* <Header /> */}
                <Movies />
                {/* <ChatArea/> */}
                <Footer />

            </Grid>
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