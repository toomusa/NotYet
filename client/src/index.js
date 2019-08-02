import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";
// import { default as reduxThunk } from "redux-thunk";
import './index.css';
import { ReactReduxSocketMiddleware } from 'react-redux-socket/client'

// import containers
import App from './App';
// import SignUp from "./containers/SignUp";
// import SignIn from "./containers/SignIn";
// import SignOut from "./containers/SignOut";

// import components
// import Welcome from "./components/Welcome";
import reducers from "./reducers";

// const socketAddress = process.env.production ? 'heroku' : 'ws://localhost:4000/app1'
const io = require('socket.io-client')('ws://localhost:4000/app1');

// configure redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    {auth: { authenticated: localStorage.getItem("token")}},
    composeEnhancers(applyMiddleware(reduxThunk))
    // composeEnhancers(applyMiddleware(ReactReduxSocketMiddleware(io), reduxThunk)),
)

ReactDOM.render(
    <Provider store={store}>
        {/* <Router> */}
            <App>
                {/* <Route exact path="/" component={Welcome}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/signout" component={SignOut}/>

                commented out now just to show functionality of front end
                need to properly link everything on the landing page
                -
                i.e register leads to signUp,
                Sign in leads to dashboard. 
                -
                i modified app.js to 
                appears on our page, just need to work on functionality
                -
                i left a dashboard.js in src folder
                it works as dashboard if you place the content in the App.js
                but still need to modify it so that it is in the page section instead
                -
                added 
                -the wrapper container for the moving background
                -content for signin container (didn't link the backend)
                -brand component for our future logo top left
                -dashboard component still needs to be linked 
                */}
            </App>
        {/* </Router> */}
    </Provider>
    , document.getElementById('root')
);
