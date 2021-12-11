import React from "react";

import PostListItem from "../post-list-item/post-list-item";

import "../post-list/post-list.css";
import "../post-list-item/post-list-item.css";

const PostList = ({posts,onDelete}) => {

    const elements = posts.map((item) => {
        const {id,...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    {...itemProps} 
                    onDelete={() => onDelete(id)}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;