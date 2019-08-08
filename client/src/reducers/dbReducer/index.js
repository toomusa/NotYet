
import { ADD_MESSAGE, MESSAGE_RECEIVED, ADD_USER, USERS_LIST, LOAD_USER, CLEAR_USER } from "../../actions/dbActions/types";

const INITIAL_STATE = {
    User: {}
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case LOAD_USER:
            console.log(action.payload)
            let userdata = action.payload
            return {...state, User: {...userdata}};
        case CLEAR_USER:
            return {...state, User: {}};
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

