import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import './index.css';

// import components
import App from './App';
import SignUp from "./containers/Auth/SignUp";
import SignIn from "./containers/Auth/SignIn";
import SignOut from "./containers/SignOut";
import Welcome from "./components/Welcome";
import ChatArea from "./components/ChatArea";
import Dashboard from "./components/Dashboard";
import Wrapper from './components/Wrapper';
import Channels from './containers/Channels';

// configure redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    {auth: { authenticated: localStorage.getItem("token")}},
    composeEnhancers(applyMiddleware(reduxThunk))
)

//#region
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Wrapper>
                <App>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/signout" component={SignOut}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/chatarea" component={ChatArea}/>
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="Channels" component={Channels}/>
                </App>
            </Wrapper>
        </Router>
    </Provider>
    , document.getElementById('root')
);
//#endregion