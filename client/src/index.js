import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";

// import containers
import App from './App';
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import SignOut from "./containers/SignOut";

// import components
import Welcome from "./components/Welcome";
import reducer from "./reducers";

// configure redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    {auth: { authenticated: localStorage.getItem("token")}},
    composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/signout" component={SignOut}/>
            </App>
        </Router>
    </Provider>
    , document.getElementById('root')
);
