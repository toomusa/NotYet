import React from "react";
import "./style.css";


const MediaSearch = () => {
    return (
        <div className="searchBar">

            <button id="mediaButton" type="submit" className="buttonToggle"><a href="/">Media</a></button>
            <button id="usersButton" type="submit" className="buttonToggle"><a href="/">Users</a></button>

            <form className="form-groupS">

                <input className="form-controlS searchMedia"
                    type="text"
                    placeholder="Search..."
                />
            </form>
        </div>
    )
}

export default MediaSearch;