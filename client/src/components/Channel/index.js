import React from "react";
import "./style.css";


export function AddButton (props) {
  return (
    <li> <span onClick={props.show}
            className="join-server createChannel" 
            data-start="modal-custom" 
            data-target="#create-group" 
            data-toggle="tooltip" 
            data-placement="right" 
            data-title="Join a Group">
          <img src="http://icons.iconarchive.com/icons/gakuseisean/ivista-2/128/Alarm-Plus-icon.png" alt=""></img>
    </span></li>
  )
}

export const ProfileButton = props => (
  <li className="toggle-sidebar"><a href="/profile" className="sidebar-toggle" data-toggle="sidebar"><img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt=""></img></a></li>
)

export const Channel = props => {
  return (
      <li><a href="/" className="current-server" data-toggle="tooltip" data-placement="right" data-title="channel name"><img src={props.poster_path} alt=""></img></a></li>
  )
};
