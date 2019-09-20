import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import "./style.css";
import Channel from "../../components/Channel"
import { ProfileButton, AddButton, } from "../../components/Buttons"
import CreateChat from "../../containers/CreateChat";

const images = [
  "https://pbs.twimg.com/profile_images/841697425060425729/CJcwG11O_400x400.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/11769bda-90b1-4261-a076-a98b26ca0c91/db14ouy-bf5282f6-c3ef-4aba-8faa-d1a0b7ce2be2.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e54db164-1718-49f1-9fee-350d097dc176/daa6jku-8db8d96e-d2f9-4078-9953-605548c73724.png",
  "https://i.pinimg.com/originals/7a/f3/71/7af3718274fe81038ece5142bf1e6bda.png",
  "https://pbs.twimg.com/profile_images/841697425060425729/CJcwG11O_400x400.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/11769bda-90b1-4261-a076-a98b26ca0c91/db14ouy-bf5282f6-c3ef-4aba-8faa-d1a0b7ce2be2.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e54db164-1718-49f1-9fee-350d097dc176/daa6jku-8db8d96e-d2f9-4078-9953-605548c73724.png",
  "https://i.pinimg.com/originals/7a/f3/71/7af3718274fe81038ece5142bf1e6bda.png",
  "https://pbs.twimg.com/profile_images/841697425060425729/CJcwG11O_400x400.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/11769bda-90b1-4261-a076-a98b26ca0c91/db14ouy-bf5282f6-c3ef-4aba-8faa-d1a0b7ce2be2.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e54db164-1718-49f1-9fee-350d097dc176/daa6jku-8db8d96e-d2f9-4078-9953-605548c73724.png",
  "https://i.pinimg.com/originals/7a/f3/71/7af3718274fe81038ece5142bf1e6bda.png"
  ]

class Channels extends Component {

  state = {
    modal: false,
    unmount: true,
    images: []
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.setState({
      images: images
    })
  }

  render() {
    return (
      <div id="sidebar" className="dragscroll">
        <ul className="sidebar-menu">
          <ProfileButton/>
          <AddButton socket={this.props.socket} toggle={this.toggle}/>
          {this.props.state.db.Channels.map( (channel, index) => (
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
              media={this.state.images[index]}
              deleted={channel.deleted}
              messages={channel.messages}
              members={channel.members}
              media_ref={channel.media_ref} 
              selectchat={this.props.selectchat}
              key={index}
            />
          ))}
        </ul>
        <CreateChat 
          socket={this.props.socket} 
          modal={this.state.modal} 
          toggle={this.toggle} 
          unmount={this.state.unmount}
          />
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
