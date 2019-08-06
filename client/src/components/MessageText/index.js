
import React from "react";
import "./style.css";

const MessageText = props => (
    <div id="page">
        <div id="chat" className="page">
        <div className="chat-footer relative">
                <form id="message-form" action="">
                    <input name="message" type="text" className="post-input messageArea" placeholder="Type your msg here..." />
                    <button type="submit" className="post-button messageSubmit"><span className="caret-right"></span></button>
                </form>
            </div>
        </div>
    </div>
);

export default MessageText; 