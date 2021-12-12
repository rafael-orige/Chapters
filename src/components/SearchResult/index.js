import React from "react";

export default function SearchResult(props) {
    return (
        <div className="search-result">
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}