import React from "react";
import "./style.css";

import Grid from "../../components/Grid";
import Header2 from "../../components/Header2";
// import MediaSearch from "../../components/MediaSearch";
import Channels from "../../containers/Channels";
import Navbar from "../../components/Navbar";
import ChatArea from "../../components/ChatArea";
import Footer from "../../components/Footer";





const DashboardPg = (props) => {

    return (
        <div>
            <Grid>
                <Header2 />
                <Navbar />
                <Channels socket={props.socket} />
                <ChatArea socket={props.socket} />
                <Footer />
            </Grid>
        </div>
    );
}

export default DashboardPg; 