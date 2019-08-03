
import React from "react";
import "./style.css";

import Wrapper from "../Wrapper";
import Brand from "../Brand";
import Grid from "../Grid";
import Auth from "../../containers/Auth";

const Welcome = () => {
    return (
    <Wrapper>
        <Brand title='VIDI' />
        <Grid>
            <Auth/>
        </Grid>
    </Wrapper>
    );
}
  
  export default Welcome; 


/* comment out ChatArea and comment in any one of these to check it out
just doing it like this for now until I figure out how to do it properly  */
/* <SignIn /> */
/* <SignUp />  */
/* <Dashboard/> */