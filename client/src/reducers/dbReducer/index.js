
import { ADD_MESSAGE, MESSAGE_RECEIVED, ADD_USER, USERS_LIST } from "../../actions/dbActions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_MESSAGE:
            return state.concat([
                {
                message: action.message,
                author: action.author,
                id: action.id
                }
            ]);
        case MESSAGE_RECEIVED:
            return state.concat([
                {
                message: action.message,
                author: action.author,
                id: action.id
                }
            ]);
        case ADD_USER:
            return state.concat([
                {
                name: action.name,
                id: action.id
                }
            ]);
        case USERS_LIST:
            return action.user
        default:
            return state;
    }
}

