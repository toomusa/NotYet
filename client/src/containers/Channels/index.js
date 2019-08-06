import React, {Component} from "react";
import "./style.css";
import Channel from "../../components/Channel"

class Channels extends Component {

  render() {
    return (
      <Channel/>
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