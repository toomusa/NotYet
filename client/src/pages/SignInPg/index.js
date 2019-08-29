import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
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


// import io from "socket.io-client"
// let socket = io.connect('http://localhost:4000');

// // let socket = io();
// socket.on('server-send', function (data) {
//   console.log(data);
//   socket.emit('client-send', { my: 'wompalompa' });
// })

class SignInPg extends Component {

  // componentDidMount() {
  //   this.props.socket.connect();
  // }

  render() {
    return (
      <div>
        {/* <Brand title='VIDI'/> */}
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