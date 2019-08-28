
import React from "react";
import Header from "./components/Header";
import "./style.css"

const App = ({ children }) => {
    return (
        <div>
            <div id="header-container">
                <Header />
            </div>
            {children}
        </div>
    )
}

export default App;
