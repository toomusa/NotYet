import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Animate from "react-smooth";
import Navbar from "../Navbar";
import { Container, Row, Col } from "reactstrap"
import "./style.css";


class Header extends Component {

    homeHeader() {
        let userCheck = this.props.state.auth.authenticated
        if (userCheck === "" || userCheck === null) {
            return (
                <Col></Col>
            )
        } else {
            return (
                <Col md="6" sm="12" xs="12">
                    <Navbar />
                </Col>
            )
        }
    }

    render() {
        return (
            <div>
                <header>
                    <Animate to="1" from="0" attributeName="opacity" duration="3000">
                        <Container className="header-area">
                            <Row>
                                <Col md="6" sm="12" xs="12">
                                    <div id="headerTitle">
                                        <Link to="/"><h2>NotYet</h2></Link>
                                        <span id="headerTag">
                                            Spoiler-Guard Chat for Film and TV enthusiasts
                                        </span>
                                    </div>
                                </Col>
                                {this.homeHeader()}
                            </Row>
                        </Container>
                    </Animate>
                </header>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state }
  }
  
  export default compose(
    connect(mapStateToProps, {}),
  )(Header);