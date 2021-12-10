import React from "react";

import "../post-status-filter/post-status-filter.css";

const PostStatusFiltr = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">All</button>
            <button type="button " className="btn btn-outline-secondary">Like</button>
        </div>
    )
}

export default PostStatusFiltr;