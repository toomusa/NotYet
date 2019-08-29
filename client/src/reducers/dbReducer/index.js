
import { RECEIVED_MESSAGE, LOAD_USER, CLEAR_USER, CREATE_CHANNEL, LOAD_DASHBOARD, ACTIVATE_CHANNEL } from "../../actions/dbActions/types";

const INITIAL_STATE = {
    Users: {},
    Channels: [],
    ActiveChannel: {}
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case LOAD_USER:
            console.log(action.payload)
            let userData = action.payload
            return {...state, Users: userData};
        case CLEAR_USER:
            return {...state, Users: {}};
        case RECEIVED_MESSAGE:
            console.log(action.payload)
            let { lastMessage } = action.payload
            console.log(lastMessage)
            console.log(lastMessage.chatId)
            // return {...state, ActiveChannel: chatData};
            // return {...state, ActiveChannel: {...state.ActiveChannel, temp_messages: chatData.temp_messages}};
            // let givenChat = state.Channels.filter(channel => channel._id === action.payload._id)
            // console.log(givenChat)
            // let givenChannel = state.Channels.filter(channel => channel._id === chatData._id)
            return {...state, Channels: state.Channels.filter(channel => 
                channel._id === lastMessage.chatId
                    ? [...state.Channels, [...channel.messages, lastMessage.message]] 
                    : state.Channels),
                ActiveChannel: {...state.ActiveChannel,
                    messages: [...state.ActiveChannel.messages, lastMessage.message]}
                };
        case CREATE_CHANNEL:
            console.log(action.payload)
            let channelData = action.payload
            return {...state, Channels: [...state.Channels, channelData]};
        case LOAD_DASHBOARD:
            console.log(action.payload)
            console.log("*************************")
            console.log(action.payload.Users)
            console.log(action.payload.Channels)
            let { Channels, Users } = action.payload
            return {...state, Channels: Channels, Users: Users};
        case ACTIVATE_CHANNEL:
            console.log(action.payload)
            let selectedChannel = {...action.payload}
            console.log("*************************")
            return {...state, ActiveChannel: selectedChannel};
        default:
            return state;
    }
}

