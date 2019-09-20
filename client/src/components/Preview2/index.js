import React from "react";
import Animate from "react-smooth";
import "./style.css";

const Preview2 = () => (

    <div className="previewDiv">
        <Animate to="1" from="0.9" attributeName="opacity">
            <div
                className="bgImagePreview">
            </div>
        </Animate>
    </div>

);
  
export default Preview2;
