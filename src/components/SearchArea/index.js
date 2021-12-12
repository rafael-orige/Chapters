import React from "react";

export default function SearchArea(props) {
    return (
        <main id="main-section">
            <div className="container">
                <div className="image-search">
                    <h1>Search for your images</h1>

                    <form className="search-input">
                        <input type="search" className="input" placeholder="Search here" onChange={props.getInput}/>
                        <div className="search-buttons">
                        <button className="submit" onClick={props.submit}>Search</button><button className="adv-search" onClick={props.advSearch}>Settings</button>
                        </div>
                        {props.children}
                    </form>
                </div>
                <div className="app-image">
                    <img src="/app.png" alt="" />
                    <div className="app-text">
                        <h2>Have All of Your Images in One Place</h2>
                        <a href="/" className="cta-app">Download</a>
                    </div>
                </div>
            </div>
        </main>
    );
}


