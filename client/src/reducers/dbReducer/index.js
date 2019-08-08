
import { RECEIVED_MESSAGE, LOAD_USER, CLEAR_USER, CREATE_CHANNEL } from "../../actions/dbActions/types";

const INITIAL_STATE = {
    Users: {},
    Chats: {},
    Channels: {}
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
        case CREATE_CHANNEL:
            console.log(action.payload)
            let channelData = action.payload
            return {...state, Channels: {...channelData}};
        default:
            return state;
    }
}

