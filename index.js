const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const routes = require("./routes");
const dbController = require("./controllers/dbController")
// const socketFunctions = require("./socket.io/socket.io")

// Database setup
mongoose.connect("mongodb://localhost/chatdb", {useNewUrlParser: true, useCreateIndex: true})

// Middlewares setup
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// If we are in production, serve our clients build folder
// This folder is created during production only
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client-build"));
}

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(routes, (req, res) => {
    // No matching route for URL Found
    res.status(404).json({
        error: '404: Resource not found.'
    })
})

// Socket.io listeners and emitters 
io.on('connection', function (socket) {

  socket.emit('server-send', { hello: 'world' });

  socket.emit("connection", {now: "you're connected"})

  socket.on('client-send', function (data) {
    console.log("inside client-send", data);
  });

  socket.on("connect", function (data) {
    console.log("connect got hit on the server", data);
  });

  socket.on("sendMessage", function (data) {
    console.log("sendMessage got hit on the server", data);
    let chatData = dbController.sendMessage(data)
    console.log("Back to socket on server")
    console.log(chatData)
    io.emit("messageResponse", {chatData})
  });

  socket.on("createChannel", function (data) {
    console.log("createChannel got hit on the server", data);
    let channelData = dbController.createChannel(data)
    console.log("Back to socket on server")
    console.log(channelData)
    return channelData
    // io.emit("channelResponse", {channelData})
  })

  io.emit("UserLoaded", {hi: "frontend"})

});


const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))