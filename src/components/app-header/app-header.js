import React from 'react'

import "../app-header/app-header.css";


const AppHeader = ({liked,allPosts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>Harut</h1>
            <h2>The {allPosts} post , and {liked} links</h2>
        </div>
    )
}

export default AppHeader;