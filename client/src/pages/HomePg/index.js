
import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import "./style.css";
import Grid from "../../components/Grid";
import Preview from "../../components/Preview";
import Preview2 from "../../components/Preview2";
import Footer from "../../components/Footer";
import Auth from "../../containers/Auth"
import { updateCurrentPage } from "../../actions/dbActions"

class HomePg extends Component {

  state = {
    userCheck: false
  }

  componentDidMount() {
    this.props.updateCurrentPage(window.location.pathname)
    let userCheck = this.props.state.auth.authenticated
    if (userCheck !== "" && userCheck !== null) {
      this.setState({
        userCheck: true
      })
    } else {
      this.setState({
        userCheck: false
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          {(this.state.userCheck) ? <h4 className="replacement">Learn more about NotYet!</h4> : <Auth socket={this.props.socket} />}
          </div>
          <Grid>
          <div className="whatMsg">
            <h4>
              <span id="note">( For guest access, use email: guest@guest.com password: guest )</span>
              <br></br>
              <br></br>
              <span className="homePageTitle">WHAT IS IT</span>
              <br></br>
              <br></br>
              NotYet is a chat application for movie and TV show enthusiasts.
              This app prevents spoilers by hiding your group conversations until you mark it watched.
              Then you can catch up on all the jwhole conversation without having your viewer experience spoiled.
            </h4>
          </div>
          <Preview />
          <div className="howMsg">
            <h4>
              <span className="homePageTitle">HOW IT WORKS</span>      
              <br></br>
              <br></br>
              When you create a channel, you can choose which movie or TV show will be the primary topic.
              When the movie is released or the show is aired, we automatically mute that channel for you.
              Once you've seen it, you can mark it watched and continue engagign with your friends.
            </h4>
          </div>
          <Preview2 />
          <div className="doMsg">
            <h4>
              <span className="homePageTitle">JOIN TODAY</span>
              <br></br>
              <br></br>
              You can chat with others who enjoy your the same motion pictures,
              discover new things to watch, rate a specific episode or movie, 
              connect with your friends,
              and more.
              <br></br>
              <br></br>
              This app is a work in progress and we're very excited to bring it to market.
              Be an early adopter and Sign up today!
            </h4>
          </div>
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
  connect(mapStateToProps, { updateCurrentPage }),
)(HomePg);
