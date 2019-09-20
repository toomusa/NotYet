import React, { Component } from 'react'
import { reduxForm, Field, reset } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { createChannel, activateChannel } from "../../actions/dbActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InputField from "../../components/InputField";
import "./style.css";

class CreateChat extends Component {

  state = {
    unmount: true
  }

  renderInput = ({ input }) => {
    return <input {...input} />
  }

  onSubmit = formProps => {
    let userId = this.props.state.db.Users._id
    let formData = {...formProps, userId}
    this.props.dispatch(reset("newChannel"))
    this.props.socket.emit("createChannel", formData)
    this.setState({modal: false})
  }
  
  reset = () => {
    this.props.dispatch(reset("newChannel"))
  }
  
  componentDidMount = () => {
    this.props.socket.on("channelResponse", (data) => {
      this.props.createChannel(data)
      this.props.activateChannel(data.Channels)})
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div> 
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className="modal-block2" unmountOnClose={this.state.unmount} onClosed={this.reset}>
          <form onSubmit={handleSubmit(this.onSubmit)} className="form-horizontal" ref="formModal">
            <ModalHeader toggle={this.props.toggle}>Create New Channel</ModalHeader>
            <ModalBody>
              <div>
                <fieldset>
                  <label>Topic</label>
                  <Field
                    name="topic"
                    component={InputField}
                    className="form-control"
                  />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <label>Description</label>
                  <Field
                    name="description"
                    component={InputField}
                    className="form-control"
                  />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <label>Add Friends</label>
                  <Field
                    name="friends"
                    component={InputField}
                    className="form-control"
                  />
                </fieldset>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" className="btn btn-block btn-radius btn-primary" onClick={this.props.toggle}>Create</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state };
}

export default compose(
  connect(mapStateToProps, { createChannel, InputField, activateChannel }),
  reduxForm({
    form: "newChannel"
  })
)(CreateChat);
