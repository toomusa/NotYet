import React from "react";
import "./style.css";
import MessageText from "../../components/MessageText"

const ChatArea = props => (
    <div id="page">
        <div id="chat-list">
            <ul className="chat-list scroll-hijack">
            </ul>
        </div>
        <div id="chat" className="page">
            <div className="page-header clearfix topicName">
                <span>Stranger Things</span>
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
                            Wow season 3 was amazing ._.
                        </div>
                    </div>
                </div>
                <div className="chat-message">
                    <div className="avatar"><img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt="" height="20px" /></div>
                    <div className="chat-message-content">
                        <a href="/" className="chat-message-author">user2</a>
                        <span className="chat-message-date">Aug 2, 2019 10:25 PM</span>
                        <div className="chat-message-message">
                            I knowww!!! LOL Dustin cracks me up
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-footer relative">
                <div id="message-form">
                    {/* NOTE FOR BIRNA: styling messed up a little, uncomment line below to see difference -BL*/}
                    {/* <input name="message" type="text" className="post-input messageArea" placeholder="Type your msg here..." /> */}
                    <MessageText className="messageArea post-input" socket={props.socket}/>
                    <button type="submit" className="post-button messageSubmit"><span className="caret-right"></span></button>
                </div>
            </div>
        </div>
    </div>
);

export default ChatArea; 