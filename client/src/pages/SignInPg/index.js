import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import "./style.css";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import SignIn from "../../containers/Auth/SignIn";
import MessageText from "../../components/MessageText"
import Preview from "../../components/Preview";
import Preview2 from "../../components/Preview2";
import Footer from "../../components/Footer";


class SignInPg extends Component {

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <SignIn />
          <div><MessageText /></div>
          <h4 className="whatMsg">VIDI is a chat program for movies and TV shows.
            What makes our app special is that we prevent spoilers by hiding chat channels
            until the user verifies they've viewed.
          </h4>
          <Preview />
          <h4 className="howMsg">You're able to chat among others who enjoy your favorite shows,
            discover new films to watch, rate a specific episode or movie, search for users or media,
            and much more.
          </h4>
          <Preview2 />
          <h4 className="doMsg">Above is a sneakpeek of what this app has to offer.
            A sleek messenger that's got a multitude of ways to keep you entertained.
            Click <a href="/signup">here</a> to sign up today.
          </h4>
          <Footer />
        </Grid>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state };
}

export default compose(
  connect(mapStateToProps, { }),
  // reduxForm({})
)(SignInPg);

// export default HomePage;