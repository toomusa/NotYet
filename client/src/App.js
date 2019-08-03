import React, { Component } from "react";
import SignIn from "./containers/SignIn";
import Brand from "./components/Brand";
import Wrapper from "./containers/Wrapper";
import Container from "./Container";
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
        <Container>
          <SignIn />
        </Container>
      </Wrapper>
    );
  }
}

export default App; 