import React from "react";

import "../search-panel/search-panel.css";

const SearchPanel =  () => {
    return (
        <input 
            className="form-control search-input"
            type="text"
            placeholder="Search the posts"
        />
    )
} 

export default SearchPanel;