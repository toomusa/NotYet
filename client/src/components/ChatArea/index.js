
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./style.css";
import { compose } from "redux";
import { connect } from "react-redux";
import MessageText from "../../components/MessageText"

class ChatArea extends Component {

  state = {
    //sample message object
    currentChatId: "",
    currentChannelName: "Stranger Things",
    messageObj: {
      username: "user1",
      timestamp: "Aug 2, 2019 10:25 PM",
      profile: "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
    }
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    console.log("scroll to bottom")
    let chatTextArea = document.getElementById("chat-text-area")
    const scrollHeight = chatTextArea.scrollHeight;
    const height = chatTextArea.clientHeight;
    const maxScrollTop = scrollHeight - height;
    ReactDOM.findDOMNode(chatTextArea).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  render() {
    return (
      <div id="page">
        <div id="chat-list">
          <ul className="chat-list scroll-hijack">
          </ul>
        </div>
        {/* CHANNEL NAME GOES INTO THIS SPAN */}
        <div id="chat" className="pageChat">
          <div className="page-header clearfix topicName">
            <span>{this.isEmpty(this.props.state.db.ActiveChannel) || this.props.state.db.ActiveChannel.topic} </span>
          </div>

          <div className="chat-body scroll-hijack" id="chat-text-area">
            {/* REPEATING BLOCK ELEMENT */}
            {!this.isEmpty(this.props.state.db.ActiveChannel)
              ? this.props.state.db.ActiveChannel.temp_messages.map((message, index) =>
                <div className="chat-message" key={index}>
                  <div className="avatar"><img src={this.state.messageObj.profile} alt="" height="30px" /></div>
                  <div className="chat-message-content">
                    <a href="/" className="chat-message-author">{this.state.messageObj.username}</a>
                    <span className="chat-message-date">{this.state.messageObj.timestamp}</span>
                    <div className="chat-message-message">
                      {message}
                    </div>
                  </div>
                </div>
              )
              :
              <div className="chat-message">
                <div className="avatar"><img src={this.state.messageObj.profile} alt="" height="30px" /></div>
                <div className="chat-message-content">
                  <a href="/" className="chat-message-author">Admin</a>
                  <span className="chat-message-date">{this.state.messageObj.timestamp}</span>
                  <div className="chat-message-message">Hey buddy, select a channel from the left to begin!
                  </div>
                </div>
              </div>
            }
          </div>
            {!this.isEmpty(this.props.state.db.ActiveChannel) ?
              <div className="chat-footer footer-sticky relative">
                <div id="message-form">
                  <MessageText className="messageArea post-input" socket={this.props.socket} chatId={this.isEmpty(this.props.state.db.ActiveChannel) || this.props.state.db.ActiveChannel._id} />
                </div>
              </div>
              : <div></div>
            }

        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  //grab messages from state
  return { state }
}

export default compose(
  connect(mapStateToProps, {}),
)(ChatArea);

