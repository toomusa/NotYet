const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");


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


const myHandler = function(action, { dispatch, broadcast }){
    switch(action.type) {
        case 'MY_ACTION_FROM_CLIENT_TO_SERVER':
            dispatch({ type: 'MY_ANSWER_FROM_SERVER_TO_CLIENT' })
            break;

        case 'TEST_SERVER_ACTION': 
            console.log('Test Action Success!');
            break;

        case 'MY_OTHER_ACTION_FROM_CLIENT':
            broadcast({ type: 'CHANNEL_NAME_MESSAGE' })
            break;
        default:
            console.log('No actions matched in server reducer.')
            break;
    }
}
        
        
const http = require('http').Server(app);
const io = require('socket.io')(http).of('app1');
const ioActionHandler = require("react-redux-socket/server");

const PORT = process.env.PORT || 4000;

console.log(ioActionHandler)
// ioActionHandler(io).handlers(myHandler) // or ioActionHandler(io, myHandler)
ioActionHandler(io, myHandler)

http.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))

// app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))