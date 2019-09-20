
import { RECEIVED_MESSAGE, LOAD_USER, CLEAR_USER, CREATE_CHANNEL, LOAD_DASHBOARD, ACTIVATE_CHANNEL, UPDATE_PAGE, UPDATE_CHANNELS } from "../../actions/dbActions/types";

const INITIAL_STATE = {
    Users: {},
    Channels: [],
    ActiveChannel: {},
    Admin: {}
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case LOAD_USER:
            let userData = action.payload
            return {...state, Users: userData};
        case CLEAR_USER:
            return {...state, Users: {}, Channels: [], ActiveChannel: {}, Admin: {}};
        case RECEIVED_MESSAGE:
            let { lastMessage } = action.payload
            return {...state, ActiveChannel: {...state.ActiveChannel,
                    messages: [...state.ActiveChannel.messages, lastMessage.messages]}
                };
        case UPDATE_CHANNELS:
            let { chatId } = action.payload.lastMessage
            let sentMessage = action.payload.lastMessage.messages
            return {...state, Channels: state.Channels.filter(channel => 
                    channel._id === chatId
                    ? channel.messages.push(sentMessage)
                    : state.Channels)
                };
        case CREATE_CHANNEL:
            let channelData = action.payload
            return {...state, Channels: [...state.Channels, channelData]};
        case LOAD_DASHBOARD:
            let { Channels, Users } = action.payload
            return {...state, Channels: Channels, Users: Users};
        case ACTIVATE_CHANNEL:
            let selectedChannel = {...action.payload}
            return {...state, ActiveChannel: selectedChannel};
        case UPDATE_PAGE:
            return {...state, Admin: {currentPath: action.payload}};
        default:
            return state;
    }
}

