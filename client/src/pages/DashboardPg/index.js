
import React, { Component } from 'react'
import "./style.css";
import { Row, Col } from "reactstrap"
import Grid from "../../components/Grid";
import Channels from "../../containers/Channels";
import ChatArea from "../../components/ChatArea";
import Footer from "../../components/Footer";
import requireAuth from "../../hoc/requireAuth"
import { connect } from 'react-redux';
import { loadDashboard, activateChannel, updateCurrentPage } from "../../actions/dbActions"


class DashboardPg extends Component {

    componentDidMount() {
        this.props.updateCurrentPage(window.location.pathname)
    }

    componentWillMount() {
        let userId = localStorage.getItem("userId");
        this.props.socket.emit("loadDashboard", userId, (userData) => {
            this.props.loadDashboard(userData)
        })
    }

    updateState(selectedChat) {
        this.setState({
            activeChat: selectedChat
        })
    }

    chatSelect = (id) => {
        let chatId = id;
        let selectedChat = this.props.state.db.Channels.filter(channel => chatId === channel._id)
        this.props.activateChannel(selectedChat[0])
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md="0" sm="0" xs="0">
                            <Channels socket={this.props.socket} selectchat={this.chatSelect} />
                        </Col>
                        <Col md="10" sm="11" xs="9">
                            <ChatArea socket={this.props.socket} />
                        </Col>
                    </Row>
                    <Footer/>
                </Grid>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { state }
};
  
export default requireAuth(connect(mapStateToProps, { loadDashboard, activateChannel, updateCurrentPage })(DashboardPg));