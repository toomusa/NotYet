import React from "react";
import "./style.css";

import Brand from "../Brand";
import Grid from "../Grid";

// birna 8/3/19 : i'll work on redirect tm, but for now you can see the seperate pages by
// 1. commenting out Channels, Dashboard, Navbar, and ChatArea, to see Auth
// 2. commenting out Auth and ChatArea, to see dashboard together with channels & nav
// 3. commenting out Auth and Dashboard, to see chat together with channels & nav
// import Channels from "../../containers/Channels";
// import Dashboard from "../../components/Dashboard";
// import Navbar from "../../components/Navbar";
import Auth from "../../containers/Auth";
// import ChatArea from "../../components/ChatArea";

const Welcome = () => {
    return (
        <div>
            <Brand title='VIDI' />
            <Grid>
                <Auth/>
                {/* <Navbar />
                <Channels />
                <Dashboard /> */}
                {/* <ChatArea/> */}

            </Grid>
        </div>
    );
}

export default Welcome; 