
import React, { Component } from "react";
import { connect } from "react-redux";
import requireAuth from "../../hoc/requireAuth";
import { Row, Col } from "reactstrap"
import "./style.css";
import Profile from "./../../containers/Profile"
import Grid from "../../components/Grid";
import Footer from "../../components/Footer";
import { updateCurrentPage } from "../../actions/dbActions"

class ProfilePg extends Component {

    componentDidMount() {
        this.props.updateCurrentPage(window.location.pathname)
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md="0" sm="0" xs="0">
                        </Col>
                        <Col md="10" sm="11" xs="9">
                            <Profile />
                        </Col>
                    </Row>
                    <Footer />
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {state};
}

export default requireAuth(connect(mapStateToProps, { updateCurrentPage })(ProfilePg));
