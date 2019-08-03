import React, { Component } from "react";
// comment out ChatArea and comment in any one of these to check it out
// just doing it like this for now until I figure out how to do it properly
// import SignIn from "./containers/SignIn"; 
// import SignUp from "./containers/SignUp";  
// import Dashboard from "./components/Dashboard";
import ChatArea from "./components/ChatArea";
import Brand from "./components/Brand";
import Wrapper from "./components/Wrapper";
import Grid from "./components/Grid";
import "./App.css";

import io from "socket.io-client"
let socket = io.connect('http://localhost:4000');
socket.on('server-send', function (data) {
  console.log(data);
  socket.emit('client-send', { my: 'wompalompa' });
});


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Brand title='VIDI' />
        <Grid>
          {/* comment out ChatArea and comment in any one of these to check it out
          just doing it like this for now until I figure out how to do it properly  */}
          {/* <SignIn /> */}
          {/* <SignUp />  */}
          {/* <Dashboard/> */}
          <ChatArea/>
        </Grid>
      </Wrapper>
    );
  }
}

export default App; 