import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import "./style.css";
import {ProfileButton, AddButton, Channel} from "../../components/Channel"
import CreateChat from "../../containers/CreateChat";

const images = [
  "http://www.iconarchive.com/download/i60042/mattahan/ultrabuuf/Comics-Spiderman-Morales.ico",
  "http://forreadingaddicts.co.uk/wp-content/uploads/2016/10/stranger-things-icon.jpg",
  "https://pbs.twimg.com/profile_images/841697425060425729/CJcwG11O_400x400.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/11769bda-90b1-4261-a076-a98b26ca0c91/db14ouy-bf5282f6-c3ef-4aba-8faa-d1a0b7ce2be2.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e54db164-1718-49f1-9fee-350d097dc176/daa6jku-8db8d96e-d2f9-4078-9953-605548c73724.png"
]

const messages = [
  "What up",
  "Whassup",
  "Whassssuuuuup",
  "Hey",
  "Its yo boy!",
  "Good evening",
  "Holla playa",
  "That's enoough y'all"
]

class Channels extends Component {

  state = {
    modal: false
  }

  showModal = () => {
      // console.log("Show Modal")
      (this.state.modal) ? this.setState({modal: false}) : this.setState({modal: true})
      // return (<CreateChat socket={props.socket}/>)
  };

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    return array;
  }

  render() {
    return (
      <div id="sidebar" className="dragscroll">
        <ul className="sidebar-menu">
          <ProfileButton/>
          <AddButton socket={this.props.socket} show={this.showModal}/>
          {this.props.state.db.Channels.map( (channel, index) => (
            <div onClick={() => this.props.selectchat(channel._id)} key={index}>
              <Channel 
                date={channel.date}
                public={channel.public} 
                starred={channel.starred}
                id={channel._id}
                topic={channel.topic}
                description={channel.description}
                friends={channel.friends}
                admin={channel.admin}
                muted={channel.muted} // from User table?
                media={this.shuffle(images)}
                deleted={channel.deleted}
                temp_messages={messages}
                messages={channel.messages}
                members={channel.members}
                media_ref={channel.media_ref} 
                // selectchat={this.props.selectchat}
              />
            </div>
          ))}

        </ul>
        <CreateChat socket={this.props.socket} modal={this.state.modal} />
      </div >
    )
  }
};

function mapStateToProps(state) {
  return { state };
}

export default compose(
  connect(mapStateToProps, {}),
)(Channels);
