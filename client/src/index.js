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
import Auth from "./Auth";
// import SignUp from "./containers/Auth/SignUp";
// import SignIn from "./containers/Auth/SignIn";
import SignOut from "./containers/SignOut";
import HomePage from "./pages/HomePage";
import ChatAreaPg from "./pages/ChatAreaPg";
import DashboardPg from "./pages/DashboardPg";
import SignInPg from "./pages/SignInPg";
import SignUpPg from "./pages/SignUpPg";
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
                <Auth>
                    <Route exact path="/signup" component={SignUpPg}/>
                    <Route exact path="/signin" component={SignInPg}/>
                    <Route exact path="/signout" component={SignOut}/>
                    <Route exact path="/" component={HomePage}/>
                </Auth>
                <App>    
                    <Route exact path="/dashboard" component={DashboardPg}/>
                    <Route exact path="/chatarea" component={ChatAreaPg}/>
                    {/* <Route exact path="Channels" component={Channels}/> */}
                </App>
            </Wrapper>
        </Router>
    </Provider>
    , document.getElementById('root')
);
//#endregion