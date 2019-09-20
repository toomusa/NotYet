
import { LOAD_USER, RECEIVED_MESSAGE, CREATE_CHANNEL, LOAD_DASHBOARD, ACTIVATE_CHANNEL, UPDATE_PAGE, UPDATE_CHANNELS } from "../../actions/dbActions/types";


export const loadUser = (data, callback) => async dispatch => {
  localStorage.setItem("userId", data.id);
  try {
      dispatch({ type: LOAD_USER, payload: data });
      callback();
  } catch (e) {
      dispatch({ type: LOAD_USER, payload: "Error: retriving user info" });
  }
}

export const loadDashboard = (data) => async dispatch => {
  try {
      dispatch({ type: LOAD_DASHBOARD, payload: data });
  } catch (e) {
      dispatch({ type: LOAD_DASHBOARD, payload: "Error: saving new message to store" });
  }
}

export const receivedMessage = (data) => async dispatch => {
  try {
      dispatch({ type: RECEIVED_MESSAGE, payload: data });
  } catch (e) {
      dispatch({ type: RECEIVED_MESSAGE, payload: "Error: saving new message to store" });
  }
}

export const updateChannels = (data) => async dispatch => {
  try {
      dispatch({ type: UPDATE_CHANNELS, payload: data });
  } catch (e) {
      dispatch({ type: UPDATE_CHANNELS, payload: "Error: saving new message to store" });
  }
}

export const createChannel = (data, cb) => async dispatch => {
  let { Users, Channels } = data
  try {
      dispatch({ type: CREATE_CHANNEL, payload: Channels });
      dispatch({ type: LOAD_USER, payload: Users });
      cb()
  } catch (e) {
      dispatch({ type: CREATE_CHANNEL, payload: "Error: saving new channel to store" });
  }
}

export const activateChannel = (data) => async dispatch => {
  try {
      dispatch({ type: ACTIVATE_CHANNEL, payload: data });
  } catch (e) {
      dispatch({ type: ACTIVATE_CHANNEL, payload: "Error: activating channel to store" });
  }
}

export const updateCurrentPage = (data) => async dispatch => {
  try {
      dispatch({ type: UPDATE_PAGE, payload: data });
  } catch (e) {
      dispatch({ type: UPDATE_PAGE, payload: "Error: updating page" });
  }
}

