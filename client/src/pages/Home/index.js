
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import "./style.css";

class Home extends Component {

    render() {
        return (
          <div>
            <Field>Home</Field>
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
)(Home);

// This is where you're welcomed with the sign in
//
// import React, { Component } from "react";
// import SignIn from "./containers/SignIn";
// import Brand from "./components/Brand";
// import Wrapper from "./containers/Wrapper";
// import Container from "./Container";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <Wrapper>
//         <Brand title='VIDI' />
//         <Container>
//           <SignIn />
//         </Container>
//       </Wrapper>
//     );
//   }
// }

// export default App; 