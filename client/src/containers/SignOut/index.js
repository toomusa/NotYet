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



// import React, { Component } from "react";
// // import { reduxForm, Field } from "redux-form";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import "./style.css";

// import Header from "../../components/Header";
// import Grid from "../../components/Grid";
// import SignIn from "../../containers/Auth/SignIn";
// import MessageText from "../../components/MessageText"
// import Preview from "../../components/Preview";
// import Preview2 from "../../components/Preview2";
// import Footer from "../../components/Footer";

// class SignOut extends Component {

//     // componentDidMount() {
//     //   this.props.socket.connect();
//     // }

//     render() {
//         return (
//             <div>
//                 {/* <Brand title='VIDI'/> */}
//                 <Header />
//                 <Grid>
//                     <SignIn />
//                     <div><MessageText socket={socket} /></div>
//                     <h4 className="whatMsg">VIDI is a chat program for movies and TV shows.
//                     What makes our app special is that we prevent spoilers by hiding chat channels
//                     until the user verifies they've viewed.
//               </h4>
//                     <Preview />
//                     <h4 className="howMsg">You're able to chat among others who enjoy your favorite shows,
//                     discover new films to watch, rate a specific episode or movie, search for users or media,
//                     and much more.
//               </h4>
//                     <Preview2 />
//                     <h4 className="doMsg">Above is a sneakpeek of what this app has to offer.
//                     A sleek messenger that's got a multitude of ways to keep you entertained.
//               Click <a href="/signup">here</a> to sign up today.
//               </h4>
//                     <Footer />
//                 </Grid>

//             </div>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return { state };
// }

// export default compose(
//     connect(mapStateToProps, { socket }),
//     // reduxForm({})
// )(SignOut);

// // export default HomePage;