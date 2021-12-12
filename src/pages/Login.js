import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LoginArea from "../components/LoginArea";
import SignUpArea from "../components/SignUpArea";

export default function Login() {

    const [isSmall, setIsSmall] = useState(false);
    
    //If window width is less than 700px the desktop version of the login will be replaced for the mobile version.
    const setWidth = () => {
        if(window.innerWidth <= 700) {
            setIsSmall(true);
        } else {
            setIsSmall(false);
        }
    }

    useEffect(() => {
        setWidth()
    }, []);

    window.addEventListener("resize", setWidth);

    return (
        <>
        {!isSmall &&
            <LoginDesktop />
        }

        {isSmall &&
            <LoginMobile />
        }
        </>
    );
}


function LoginStructure(props) {
    return (
        <>
            <div className="login-area">
                <div className="container">
                    <img src="/Logo.png" alt="" />
                    <div className="forms-area">
                        {props.children}
                    </div>
                    <Link to="/search">Back</Link>
                </div>
            </div>
        </>
    );
}

function SignUp(props) {
    return (
        <LoginStructure>
            <div className="register">
            <SignUpArea mobile={props.mobile} signin={props.signin} />
            </div>
        </LoginStructure>
    ); 
}

function SignIn(props) {
    return (
        <LoginStructure>
            <div className="login">
            <LoginArea mobile={props.mobile} signup={props.signup} />
            </div>
        </LoginStructure>
    ); 
}

function LoginMobile() {
    const [changeLogin, setChangeLogin] = useState(false);

    if(changeLogin) {
        return <SignIn mobile={true} signup={() => { setChangeLogin(false) }} />
    } else {
        return <SignUp mobile={true} signin={() => { setChangeLogin(true) }} />
    }
}

function LoginDesktop() {
    return (
        <LoginStructure>
            <div className="login">
                <LoginArea />
            </div>
            <div className="break"></div>
            <div className="register">
                <SignUpArea />
            </div>
        </LoginStructure>  
    );
}