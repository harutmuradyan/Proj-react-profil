import React from "react";

import "../post-add-form/post-add-form.css";

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Whats your ?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd("hello")}>
                ADD</button>
        </div>
    )
}

export default PostAddForm;