import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import './style.css';
import history from './history';

// import components
import App from './App';
import HomePg from "./pages/HomePg";
import DashboardPg from "./pages/DashboardPg";
import ProfilePg from "./pages/ProfilePg";
import Wrapper from './components/Wrapper';
import Explorer from './pages/ExplorerPg';
import CreateChat from './containers/CreateChat';
// import Channels from './containers/Channels';

// configure redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initial_state = { auth: { authenticated: localStorage.getItem("token") } };

const store = createStore(
    reducers,
    initial_state,
    composeEnhancers(applyMiddleware(reduxThunk))
)

//#region
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Wrapper>
                <App>
                    <Route exact path="/" component={HomePg} />
                    <Route exact path="/dashboard" component={DashboardPg} />
                    <Route exact path="/profile" component={ProfilePg} />
                    <Route exact path="/explorer" component={Explorer} />
                    <Route exact path="/" component={HomePg}/>
                    <Route exact path="/dashboard" component={DashboardPg}/>
                    <Route exact path="/profile" component={ProfilePg}/>
                    <Route exact path="/explorer" component={Explorer}/>
                    <Route exact path="/createchat" component={CreateChat}/>
                    {/* <Route exact path="/signup" component={SignUpPg} />
                    <Route exact path="/signin" component={SignInPg} />
                    <Route exact path="/signout" component={SignOut}/>
                    <Route exact path="Channels" component={Channels}/> */}
                </App>
            </Wrapper>
        </Router>
    </Provider>
    , document.getElementById('root')
);
//#endregion