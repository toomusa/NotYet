
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import { receivedMessage, updateChannels } from "../../actions/dbActions"
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

  sendMessage(content, chatId, userId, adminId) {
    let message = {content, chatId, userId, adminId}
    this.props.socket.emit("sendMessage", message)
  }

  componentDidMount = () => {
    this.props.socket.on("messageResponse", (lastMessage) => {
      this.props.receivedMessage(lastMessage)
      this.props.updateChannels(lastMessage)
    })
  }

  handleFormKeyDown(e) {
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
      this.sendMessage(this.state.formContent, this.props.chatId, this.props.userId, this.props.adminId);
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
    ...state,
    formContent: ""
  }
};

export default connect(mapStateToProps, { receivedMessage, updateChannels })(MessageText);
