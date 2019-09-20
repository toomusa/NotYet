
import React from "react";
// import Header from "./components/Header";
// import logo from "./assets/images/logo.png";
// import { Link } from 'react-router-dom';
import "./style.css"

const App = (props) => {
    return (
        <div>
            {/* <div id="header-container">
                <div id="logo-image">
                    <Link to="/"><img src={logo} alt=""></img></Link>
                </div>
                <Header />
            </div> */}
            {props.children}
        </div>
    )
}

export default App;
