
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import requireAuth from "../hoc/requireAuth";
import "./style.css";

class Dashboard extends Component {

    render() {
        return (
          <div>
            <Field>Dashboard</Field>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {state};
}

const formedComponent = compose(
  connect(mapStateToProps, {}),
  reduxForm({})
)(Dashboard);

export default requireAuth(formedComponent);

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