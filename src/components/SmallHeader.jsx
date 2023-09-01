import React from "react";

function SmallHeader(props) {
    return (
        <div className="headersmall">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-3 rounded-3">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">{props.name}</li>
            </ol>
            </nav>
        </div>
    );
}

export default SmallHeader;