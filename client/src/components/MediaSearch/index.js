import React from "react";
import "./style.css";


const MediaSearch = () => {
    return (
        <div className="searchBar">

            <button id="mediaButton" type="submit" className="buttonToggle"><span>Media</span></button>
            <button id="usersButton" type="submit" className="buttonToggle"><span>Users</span></button>

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