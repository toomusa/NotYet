
import { LOAD_USER } from "../../actions/dbActions/types";


export const loadUser = (data, callback) => async dispatch => {
  console.log("We're inside dbActions")
  console.log(data)
  try {
      dispatch({ type: LOAD_USER, payload: data });
      callback();
  } catch (e) {
      dispatch({ type: LOAD_USER, payload: "Error in retriving user info, see src -> sockets" });
  }
}


// socket middleware is saved to state in createStore, which also creates connection
// component initiates action via event handlers
// data is captured via reduxForms and calls an action
// action dispatches payload to reducer
// reducer updates state, passing through socket middleware
// socket listens to message type and calls action


// App.js connects to socket 

