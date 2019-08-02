
import { AUTH_USER, AUTH_ERROR } from "../../actions/apiActions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case AUTH_USER:
            return {...state};
        case AUTH_ERROR:
            return {...state};
        default:
            return state;
    }
}

