
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import "./style.css";

import Brand from "../../components/Brand";
import Grid from "../../components/Grid";
import Auth from "../../containers/Auth"
import MessageText from "../../components/MessageText"

class HomePage extends Component {

    render() {
        return (
          <div>
            <Brand title='VIDI'/>
           
            <Grid>
              <Auth/>
              <div><MessageText/></div>
            </Grid>
            
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {state};
}

// export default compose(
//     connect(mapStateToProps, {}),
//     reduxForm({})
// )(HomePage);

export default HomePage;

