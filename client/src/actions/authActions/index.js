
import { AUTH_USER, AUTH_ERROR, TEST_ACTION } from "./types";
import axios from "axios";

// const authenticateUser = payload => ({
//     type: AUTH_USER, 
//     payload: res.data.token,
// })

export const signup = (formProps, callback) => async dispatch => {
    try {
        const res = await axios.post("/api/auth/signup", formProps);
        console.log(res.data.token)
        dispatch({ type: AUTH_USER, payload: res.data.token });
        // dispatch(authenticateUser(res.data.token));
        localStorage.setItem("token", res.data.token);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: "Email in use" });
    }
}

export const signin = (formProps, callback) => async dispatch => {
    try {
        const res = await axios.post("/api/auth/signin", formProps);
        console.log(res.data.token)
        dispatch({ type: AUTH_USER, payload: res.data.token });
        localStorage.setItem("token", res.data.token);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
    }
}

export const signout = () => {
    localStorage.removeItem("token");
    return {
        type: AUTH_USER,
        payload: ""
    }
}

export const testDispatch = () =>
    dispatch => {
        dispatch({ type: TEST_ACTION  })
}

