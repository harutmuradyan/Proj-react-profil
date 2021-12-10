import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFiltr from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "../app/app.css";

const App = () => {

    const data = [
        {label: "Going to learn Raect", important : true},
        {label: "That is so good", important: false},
        {label: "I need a breack...", important: false}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFiltr/>
            </div>
            <PostList  posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;