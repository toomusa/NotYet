
import React from "react";
import "./App.css";

// import io from "socket.io-client"

// let socket = io.connect('http://localhost:4000');
// socket.on('server-send', function (data) {
//   console.log(data);
//   socket.emit('client-send', { my: 'wompalompa' });
// });

const App = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default App;