import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { createChannel } from "../../actions/dbActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InputField from "../../components/InputField";
import "./style.css";

class CreateChat extends Component {

  state = {
    modal: true
  }

  onSubmit = formProps => {
    let userId = this.props.state.db.Users._id
    let formData = {...formProps, userId}
    this.props.socket.emit("createChannel", formData)
    this.setState({modal: false})
  }
  
  componentDidMount = () => {
    this.props.socket.on("channelResponse", (data) => {
      this.props.createChannel(data, () => {
        this.props.selectchat(data.Channels._id)})
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div> 
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className="modal-block2" unmountOnClose={true}>
          <ModalHeader>Create New Channel</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(this.onSubmit)} className="form-horizontal" ref="formModal">
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
              {/* <div>
                <fieldset>
                  <label>Add Friends</label>
                  <Field
                    name="friends"
                    component={InputField}
                    className="form-control"
                  />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <label>Media</label>
                  <Field
                    name="media"
                    component={InputField}
                    className="form-control"
                  />
                </fieldset>
              </div> */}
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
              <div>
                <br></br>
                <Button color="primary" type="submit" className="btn btn-block btn-radius btn-primary" onClick={this.props.toggle}>Create</Button>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state };
}

export default compose(
  connect(mapStateToProps, { createChannel, InputField }),
  reduxForm({
    form: "newChannel"
  })
)(CreateChat);
