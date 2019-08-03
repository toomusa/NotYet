
import React from "react";
import "./style.css";

import Brand from "../Brand";
import Grid from "../Grid";
import Auth from "../../containers/Auth";

const Welcome = () => {
    return (
    <div>
        <Brand title='VIDI' />
        <Grid>
            <Auth/>
        </Grid>
    </div>
    );
}
  
  export default Welcome; 


/* comment out ChatArea and comment in any one of these to check it out
just doing it like this for now until I figure out how to do it properly  */
/* <SignIn /> */
/* <SignUp />  */
/* <Dashboard/> */