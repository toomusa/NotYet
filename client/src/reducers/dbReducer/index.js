
import { RECEIVED_MESSAGE, LOAD_USER, CLEAR_USER } from "../../actions/dbActions/types";

const INITIAL_STATE = {
    Users: {}
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case LOAD_USER:
            console.log(action.payload)
            let userdata = action.payload
            return {...state, Users: {...userdata}};
        case CLEAR_USER:
            return {...state, Users: {}};
        case RECEIVED_MESSAGE:
            console.log(action.payload)
            let chatdata = action.payload
            return {...state, Chats: {...chatdata}};
        default:
            return state;
    }
}

