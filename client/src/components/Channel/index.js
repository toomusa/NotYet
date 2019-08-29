import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import "./style.css";
// import { Tooltip } from 'reactstrap';

class Channel extends Component {
  
  // state = {
  //   tooltipOpen: false
  // }

  // toggle = () => {
  //   this.setState({
  //     tooltipOpen: !this.state.tooltipOpen
  //   });
  // }

  render() {
    return (
      <li>
        <div onClick={() => this.props.selectchat(this.props.id)}>
          <span className="current-server" data-toggle="tooltip" data-placement="right" data-title="channel name" >
            <img src={this.props.media} alt=""></img>
            {/* <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="linkIcon" toggle={this.toggle}>
              {this.props.topic}
            </Tooltip> */}
          </span>
        </div> 
      </li>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

export default compose(
  connect(mapStateToProps, {}),
)(Channel);

