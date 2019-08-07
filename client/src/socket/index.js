import io from "socket.io-client"

let socket = io();

socket.on("connection", function (data) {
  console.log("Socket is connected")
  console.log(data)
})

socket.emit('client-send', { my: 'wompalompa' });

socket.on("messageResponse", (response) => {
  console.log("Inside messageResponse", response)
})

socket.on('server-send', (data) => {
  console.log("inside server-send", data);
})

export default socket;