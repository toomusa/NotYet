
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
// import { connect as connectSocket } from '../../modules/socket';


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

  componentWillMount() {
    // this.props.connectSocket()
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
    console.log(this.state)
    if (this.state.formContent !== '') {
      this.props.sendMessage(this.props.chat._id, this.state.formContent, 'plain');
      this.setState({formContent: ''});
    }
  }

  render() {
    // const styles = require('./MessageForm.scss');

    return (
      <form className="placeholder"
            onKeyDown={this.handleFormKeyDown}
            onSubmit={this.handleSendTextMessage}>
        <Textarea
          type="text"
          placeholder="Type a message"
          required
          value={this.state.formContent}
          onChange={this.handleFormContentChange}
        />
      </form>
    );
  }
}


const mapStateToProps = function mapStateToProps(state) {
  return {
    // chat: {_id: "565421"},
    formContent: ""
  }
};

export default connect(mapStateToProps, {})(MessageText);





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