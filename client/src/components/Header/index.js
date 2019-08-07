import React from "react";
import Animate from "react-smooth";
// import Navbar from "./Navbar";
import "./style.css";

const Header = props => (

    <header>
        {/* <Navbar /> */}
        <div>
           
                <Animate to="1" from="0.9" attributeName="opacity">

                    <div
                        style={{
                            backgroundImage: `linear-gradient(90deg, rgba(36, 36, 90, 0.567) 40%, rgba(36, 36, 90, 0.467) 60%), url("https://i.ytimg.com/vi/5znji1uGNIs/maxresdefault.jpg")`
                        }}
                        className="bgImageHeader"
                    >
                        <div className="headerTitle">
                            <h1>VIDI</h1>
                            <h5>The Anti-Spoiler Chat for Film Enthusiasts</h5>
                        </div>
                        </div>
         
                </Animate>
           
        </div>
    </header>
);
  
export default Header;
