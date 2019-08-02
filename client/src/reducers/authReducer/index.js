import { AUTH_USER, AUTH_ERROR, TEST_ACTION } from "../../actions/authActions/types";

const INITIAL_STATE = {
    authenticated: "",
    errorMessage: "",
    testState: null,
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case AUTH_USER:
            return {...state, authenticated: action.payload};
        case AUTH_ERROR:
            return {...state, errorMessage: action.payload};
        case TEST_ACTION:
            return { ...state, testState: 'Success!'};

        default:
            return state;
    }
}
