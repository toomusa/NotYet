const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
// const socket = require("./socket.io/socket.io");
const app = express();

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

// Routes setup
const routes = require("./routes");

// Error Handling Goes Here
// app.use(routes);
app.use(routes, (req, res) => {
    // No matching route for URL Found
    res.status(404).json({
        error: '404: Resource not found.'
    })
})


// const myHandler = function(action, { dispatch, broadcast }){
//     switch(action.type) {
//         case 'MY_ACTION_FROM_CLIENT_TO_SERVER':
//             dispatch({ type: 'MY_ANSWER_FROM_SERVER_TO_CLIENT' })
//             break;

//         case 'TEST_SERVER_ACTION': 
//             console.log('Test Action Success!');
//             break;

//         case 'MY_OTHER_ACTION_FROM_CLIENT':
//             broadcast({ type: 'CHANNEL_NAME_MESSAGE' })
//             break;
//         default:
//             console.log('No actions matched in server reducer.')
//             break;
//     }
// }

// let server = require('http').Server(app);
// let io = require('socket.io')(server);

// server.listen(4000);

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//   socket.emit('server-send', { hello: 'world' });
//   socket.on('client-send', function (data) {
//     console.log(data);
//   });
// });



const PORT = process.env.PORT || 3001;


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))