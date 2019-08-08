import React, {Component} from "react";
import "./style.css";
import {ProfileButton, AddButton, Channel} from "../../components/Channel"
import CreateChat from "../../containers/CreateChat";

class Channels extends Component {
  state = {
    modal: false,
    channelArr:[
      {
        date: "",
        admin: "",
        muted: "",
        public: "",
        starred: "",
        ref_movie: "",
        active_channels: "",
        poster_path: "http://www.iconarchive.com/download/i60042/mattahan/ultrabuuf/Comics-Spiderman-Morales.ico"
      },
      {
        date: "",
        admin: "",
        muted: "",
        public: "",
        starred: "",
        ref_movie: "",
        active_channels: "",
        poster_path: "http://forreadingaddicts.co.uk/wp-content/uploads/2016/10/stranger-things-icon.jpg"
      },
      {
        date: "",
        admin: "",
        muted: "",
        public: "",
        starred: "",
        ref_movie: "",
        active_channels: "",
        poster_path: "https://pbs.twimg.com/profile_images/841697425060425729/CJcwG11O_400x400.jpg"
      },
      {
        date: "",
        admin: "",
        muted: "",
        public: "",
        starred: "",
        ref_movie: "",
        active_channels: "",
        poster_path: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/11769bda-90b1-4261-a076-a98b26ca0c91/db14ouy-bf5282f6-c3ef-4aba-8faa-d1a0b7ce2be2.png"
      },
      {
        date: "",
        admin: "",
        muted: "",
        public: "",
        starred: "",
        ref_movie: "",
        active_channels: "",
        poster_path: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e54db164-1718-49f1-9fee-350d097dc176/daa6jku-8db8d96e-d2f9-4078-9953-605548c73724.png"
      },
    ]
  }

  showModal = () => {
      // console.log("Show Modal")
      (this.state.modal) ? this.setState({modal: false}) : this.setState({modal: true})
      // return (<CreateChat socket={props.socket}/>)
  };


  render() {
    return (
      <div id="sidebar" className="dragscroll">
        <ul className="sidebar-menu">
          <ProfileButton/>
          <AddButton socket={this.props.socket} show={this.showModal}/>
          {this.state.channelArr.map( channel => (
            <Channel 
              topic={channel.topic}
              description={channel.description}
              public={channel.public} 
              starred={channel.starred} 
              admin={channel.admin} // from User table
              muted={channel.muted} 
              ref_movie={channel.ref_movie} 
              poster_path={channel.poster_path}/>
          ))}
          
        </ul>
        <CreateChat socket={this.props.socket} modal={this.state.modal} />
      </div >
    )
  }
};

// function mapStateToProps(state) {
//   return { state };
// }

// const formedComponent = compose(
//   connect(mapStateToProps, {}),
//   reduxForm({})
// )(Channels);

// export default requireAuth(formedComponent);

export default Channels;