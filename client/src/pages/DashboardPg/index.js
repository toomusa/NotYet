
// import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import requireAuth from "../hoc/requireAuth";
// import "./style.css";

// class Dashboard extends Component {

//     render() {
//         return (
//           <div>
//             <Field>Dashboard</Field>
//           </div>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {state};
// }

// const formedComponent = compose(
//   connect(mapStateToProps, {}),
//   reduxForm({})
// )(Dashboard);

// export default requireAuth(formedComponent);

// This is where you can change your account info
// and see all the channels you are in
// and the things you've rated
// 
// import React, { Component } from "react";
// import Dashboard from "./components/Dashboard";
// import Brand from "./components/Brand";
// import Wrapper from "./components/Wrapper";
// import Container from "./Container";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <Wrapper>
//         <Brand title='VIDI' />
//         <Container>
//           <Dashboard />
//         </Container>
//       </Wrapper>
//     );
//   }
// }

// export default App; 

import React from "react";
import "./style.css";

import Brand from "../../components/Brand";
import Grid from "../../components/Grid";
import MediaSearch from "../../components/MediaSearch";

// birna 8/3/19 : i'll work on redirect tm, but for now you can see the seperate pages by
// 1. commenting out Channels, Dashboard, Navbar, and ChatArea, to see Auth
// 2. commenting out Auth and ChatArea, to see dashboard together with channels & nav
// 3. commenting out Auth and Dashboard, to see chat together with channels & nav
import Channels from "../../containers/Channels";
import Dashboard from "../../components/Dashboard";
import Navbar from "../../components/Navbar";
// import Auth from "../../containers/Auth";
// import ChatArea from "../../components/ChatArea";

const DashboardPg = () => {
    return (
        <div>
            <Brand title='VIDI' />
            <Grid>
                {/* <Auth/> */}
                <MediaSearch />
                <Navbar />
                <Channels />
                <Dashboard />
                {/* <ChatArea/> */}

            </Grid>
        </div>
    );
}

export default DashboardPg; 