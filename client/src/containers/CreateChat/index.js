import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { createChannel } from "../../actions/dbActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InputField from "../../components/InputField";

class CreateChat extends Component {

  state = {
    modal: true
  }

  onSubmit = formProps => {
    debugger;
    console.log(formProps)
    this.props.socket.emit("createChannel", formProps, function(channelData) {
      console.log(channelData)
        this.props.createChannel(channelData => {
          console.log("Sent to dbActions from createChat")
        })
    })
  }
  

  // @Birna check this link for the types of effects you can add, i.e. onBlur, onFocus, onDrop...
  // https://redux-form.com/7.4.0/docs/api/field.md/
  
  render() {
    console.log(this.props.modal)
    const {handleSubmit} = this.props
    return (
      <div>
        <Modal isOpen={this.props.modal} onClick={this.toggle}>
          <ModalHeader>Create New Channel</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div>
                <fieldset>
                  <label>Topic</label>
                  <Field
                    name="topic"
                    label="topic"
                    component={InputField}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset>
                <label>Description</label>
                  <Field
                    name="description"
                    label="description"
                    component={InputField}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset>
                <label>Friends</label>
                  <Field
                    name="friends"
                    label="friends"
                    component={InputField}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset>
                <label>Media</label>
                  <Field
                    name="media"
                    label="media"
                    component={InputField}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset>
                <label>Public</label>
                  <Field
                    name="public"
                    label="public"
                    component={InputField}
                  />
                </fieldset>
              </div>
              <div>
              <Button color="primary" type="submit" onClick={this.toggle}>Create</Button>
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
  connect(mapStateToProps, { createChannel , InputField}),
  reduxForm({
    form: "newChannel"
  })
)(CreateChat);

// export default CreateChat;