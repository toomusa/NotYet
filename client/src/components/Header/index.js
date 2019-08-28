import React from "react";
import Animate from "react-smooth";
import Navbar from "../Navbar";
import { Container, Row, Col } from "reactstrap"
import "./style.css";

const homeHeader = () => {
    if (window.location.pathname === "/") {
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

const Header = () => ( 
    <div>
        <header>
            <Animate to="1" from="0" attributeName="opacity" duration="3000">
                <Container className="header-area">
                    <Row>
                        <Col md="6" sm="12" xs="12">
                            <div id="headerTitle">
                                <h2>NotYet</h2>
                                <span id="headerTag">
                                    Spoiler-Guard Chat for Film and TV enthusiasts
                                </span>
                            </div>
                        </Col>
                        {homeHeader()}
                    </Row>
                </Container>
            </Animate>
        </header>
    </div>
);


export default Header;
