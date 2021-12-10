import React from "react";

import "../post-add-form/post-add-form.css";

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Whats your ?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >ADD</button>
        </form>
    )
}

export default PostAddForm;