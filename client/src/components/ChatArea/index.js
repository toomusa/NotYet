import React from "react";
import "./style.css";

const ChatArea = props => (
    <div id="page">
        <div id="chat-list">
            <ul className="chat-list scroll-hijack">
            </ul>
        </div>
        <div id="chat" className="page">
            <div className="page-header clearfix">
                <span>Channel Name Goes Here</span>
                <ul>
                </ul>
            </div>
            <div className="chat-body scroll-hijack">
                <div className="chat-message">
                    <div className="avatar"><img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt="" height="20px" /></div>
                    <div className="chat-message-content">
                        <a href="/" className="chat-message-author">user1</a>
                        <span className="chat-message-date">Jul 31, 2019 10:25 PM</span>
                        <div className="chat-message-message">
                            hello
                        </div>
                    </div>
                </div>
                <div className="chat-message">
                    <div className="avatar"><img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt="" height="20px" /></div>
                    <div className="chat-message-content">
                        <a href="/" className="chat-message-author">user2</a>
                        <span className="chat-message-date">Aug 2, 2019 10:25 PM</span>
                        <div className="chat-message-message">
                            hello
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-footer relative">
                <form id="message-form" action="">
                    <input name="message" type="text" className="post-input" placeholder="Type your msg here..." />
                    <button type="submit" className="post-button"><span className="caret-right"></span></button>
                </form>
            </div>
        </div>
    </div>
);

export default ChatArea; 