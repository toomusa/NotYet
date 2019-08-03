
import React from "react";
import "./style.css";

const MessageText = props => (
    <div id="page">
        <div id="chat" className="page">
            <div className="chat-footer relative">
                <form id="message-form" action="">
                    <input name="message" type="text" className="post-input" placeholder="Type your msg here..." />
                    <button type="submit" className="post-button"><span className="caret-right"></span></button>
                </form>
            </div>
        </div>
    </div>
);

export default MessageText; 