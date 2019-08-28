
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import { receivedMessage } from "../../actions/dbActions"
// import { connect as connectSocket } from '../../modules/socket';
// import "./style.css";

// import { send as sendMessage } from "../../modules/message";

export class MessageText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formContent: '',
    };

    this.handleFormKeyDown = this.handleFormKeyDown.bind(this);
    this.handleFormContentChange = this.handleFormContentChange.bind(this);
    this.handleSendTextMessage = this.handleSendTextMessage.bind(this);
  }

  sendMessage(content, chatId) {
    console.log(content)
    console.log(chatId)
    let message = {content: content, chatId: chatId}
    console.log(message)
    this.props.socket.emit("sendMessage", message, function(chatData) {
      console.log(chatData)
    })
  }

  componentDidMount = () => {
    this.props.socket.on("messageResponse", (chatData) => {
      console.log("messageResponse frontend hit")
      console.log(chatData)
      this.props.receivedMessage(chatData)
    })
  }

  handleFormKeyDown(e) {
    // Form can be submitted through the input message textarea too!
    // That is by using the Enter key (Shift-Enter for new lines).
    if (e.keyCode === 13 && !e.shiftKey) {
      this.handleSendTextMessage(e);
    }
  }

  handleFormContentChange(e) {
    this.setState({ formContent: e.target.value });
  }

  handleSendTextMessage(e) {
    e.preventDefault();
    if (this.state.formContent !== '') {
      this.sendMessage(this.state.formContent, this.props.chatId);
      this.setState({formContent: ''});
    }
  }

  render() {

    return (
      <div className="chat-footer">
        <form className="placeholder"
              onKeyDown={this.handleFormKeyDown}
              onSubmit={this.handleSendTextMessage}>
          <Textarea
            type="text"
            placeholder="Type here..."
            required
            value={this.state.formContent}
            onChange={this.handleFormContentChange}
            name="message" 
            className="post-input messageArea" 
          />
        <button type="submit" className="btn btn-outline-primary postBtn messageSubmit"><span className="caret-right"></span></button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = function mapStateToProps(state) {
  return {
    formContent: ""
  }
};

export default connect(mapStateToProps, { receivedMessage })(MessageText);





// import React from "react";
// import "./style.css";

// const MessageText = props => (
//     <div id="page">
//         <div id="chat" className="page">
//         <div className="chat-footer relative">
//                 <form id="message-form" action="">
//                     <input name="message" type="text" className="post-input messageArea" placeholder="Type your msg here..." />
//                     <button type="submit" className="post-button messageSubmit"><span className="caret-right"></span></button>
//                 </form>
//             </div>
//         </div>
//     </div>
// );

// export default MessageText; 