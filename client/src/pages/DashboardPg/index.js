
import React, { Component } from 'react'
import "./style.css";

import Grid from "../../components/Grid";
import Header2 from "../../components/Header2";
// import MediaSearch from "../../components/MediaSearch";
import Channels from "../../containers/Channels";
import Navbar from "../../components/Navbar";
import ChatArea from "../../components/ChatArea";
import Footer from "../../components/Footer";
import { connect } from 'react-redux';
import { loadDashboard, activateChannel } from "../../actions/dbActions"


class DashboardPg extends Component {

    state = {
        activeChat: {
            date: "2019-08-27T05:10:23.617Z",
            public: "false",
            starred: 0,
            _id: "5d64bb6d1aba7623ecc69299",
            topic: "The Detour",
            description: "Get Some!!",
            friends: "Joe, Jack, Jill",
            media: "smiley face",
            deleted: "false",
            messages: [],
            members: [],
            media_ref: [],
            __v: 0,
            admin: "5d64bb5c1aba7623ecc69298",
            temp_messages: ["What up", "Whassup", "Whassssuuuuup", "Hey", "Its yo boy!", "Good evening", "Holla playa", "That's enoough y'all"]
        }
    }

    componentDidMount() {
        // console.log(this.props.store)
        let userId = localStorage.getItem("userId");
        console.log(userId)
        this.props.socket.emit("loadDashboard", userId, (userData) => {
            console.log("Dashboard is fetching userData")
            console.log(userData)
            this.props.loadDashboard(userData)
        })
    }

    updateState(selectedChat) {
        this.setState({
            activeChat: selectedChat
        })
    }

    chatSelect = (id) => {
        let chatId = id;
        console.log(chatId)
        console.log(this.state)
        console.log(this.props.state)
        let selectedChat = this.props.state.db.Channels.filter(channel => chatId === channel._id)
        console.log(selectedChat)
        this.props.activateChannel(selectedChat[0])
        console.log("ACTIVE CHAT STATE")
        // this.updateState(selectedChat)
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                <Grid>
                <Header2 />
                    <Navbar />
                    <Channels socket={this.props.socket} selectchat={this.chatSelect} />
                    <ChatArea socket={this.props.socket} />
                    <Footer/>
                </Grid>
            </div>
        );
    }

}


function mapStateToProps(state) {
    return { state }
};
  
export default connect(mapStateToProps, { loadDashboard, activateChannel })(DashboardPg);