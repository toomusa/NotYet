
import * as types from "./types";

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextUserId++;
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})

// socket middleware is saved to state in createStore, which also creates connection
// component initiates action via event handlers
// data is captured via reduxForms and calls an action
// action dispatches payload to reducer
// reducer updates state, passing through socket middleware
// socket listens to message type and calls action


// App.js connects to socket 

