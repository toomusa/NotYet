import React from "react";
// import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import requireAuth from "../hoc/requireAuth";
import "./style.css";

// class Channels extends Component {
const Channels = props => (
  // <div>
  // <Field>Channels</Field> 
  // </div>
  <div id="sidebar" className="dragscroll">
    <ul className="sidebar-menu">
      <li className="toggle-sidebar"><a href="/" className="sidebar-toggle" data-toggle="sidebar"><img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt=""></img></a></li>
      <li><a href="/" className="current-server" data-toggle="tooltip" data-placement="right" data-title="channel name"><img src="http://www.iconarchive.com/download/i60042/mattahan/ultrabuuf/Comics-Spiderman-Morales.ico" alt=""></img></a></li>
      <li><a href="/" className="current-server" data-toggle="tooltip" data-placement="right" data-title="channel name"><img src="http://forreadingaddicts.co.uk/wp-content/uploads/2016/10/stranger-things-icon.jpg" alt=""></img></a></li>
      <li><a href="/" className="current-server" data-toggle="tooltip" data-placement="right" data-title="channel name"><img src="https://pbs.twimg.com/profile_images/841697425060425729/CJcwG11O_400x400.jpg" alt=""></img></a></li>
      <li><a href="/" className="current-server" data-toggle="tooltip" data-placement="right" data-title="channel name"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/11769bda-90b1-4261-a076-a98b26ca0c91/db14ouy-bf5282f6-c3ef-4aba-8faa-d1a0b7ce2be2.png" alt=""></img></a></li>
      <li><a href="/" className="current-server" data-toggle="tooltip" data-placement="right" data-title="channel name"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e54db164-1718-49f1-9fee-350d097dc176/daa6jku-8db8d96e-d2f9-4078-9953-605548c73724.png" alt=""></img></a></li>
      <li><a href="/" className="join-server" data-start="modal-custom" data-target="#create-group" data-toggle="tooltip" data-placement="right" data-title="Join a Group"><img src="http://icons.iconarchive.com/icons/gakuseisean/ivista-2/128/Alarm-Plus-icon.png" alt=""></img></a></li>
    </ul>
  </div>
);

// function mapStateToProps(state) {
//   return { state };
// }

// const formedComponent = compose(
//   connect(mapStateToProps, {}),
//   reduxForm({})
// )(Channels);

// export default requireAuth(formedComponent);

export default Channels;