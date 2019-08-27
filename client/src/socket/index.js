import io from "socket.io-client"
// import { loadUser } from "../actions/dbActions"
// import { LOAD_USER } from "../actions/dbActions/types";


const socket = io();

// import { socket } from "../App";

socket.on("connection", function (data) {
  console.log("Socket is connected")
  console.log(data)
})

socket.emit('client-send', { my: 'wompalompa' });

// socket.on("messageResponse", response => {
//   console.log("Inside messageResponse", response)
// })

socket.on('server-send', data => {
  console.log("inside server-send", data);
})



export default socket;