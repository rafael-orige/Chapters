import React from "react";
import { Link } from "react-router-dom";

import HeaderMenu from "../HeaderMenu";

function Header(props) {
    return (
        <header>
            <div className="container">
                <Link to="/search"><img src="/logo.png" alt="" className="logo" /></Link>
                <HeaderMenu page={props.page}/>
            </div>
        </header>
    );
};

export default Header;