import React from "react";

export default function ImagesArea(props) {
    return (
        <div className="images-area">
            <h2>{props.results} Images were found</h2>
            <br/>
            <div className="images-area--wrapper">
                {props.children}
            </div>
        </div>
    );
}

