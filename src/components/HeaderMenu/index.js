import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import HeaderMenuMobile from "../HeaderMenuMobile";

export default function HeaderMenu(props) {
    const dispatch = useDispatch();

    const [isSmall, setIsSmall] = useState(false);

    const [loginBox, setLoginBox] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginState = useSelector(state => state.login.loginState);

    const [userMenu, setUserMenu] = useState(false);


    const setWidth = () => {
        if(window.innerWidth <= 600) return setIsSmall(true)
        else return setIsSmall(false)
    };

    window.addEventListener('resize', setWidth);

    const handleSubmit = (event) => {
        event.preventDefault();
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(email.match(pattern) && password !== "") {
            dispatch({
                type: 'SET_STATE',
                payload: { loginState: true }
            });
            setLoginBox("disabled");
        } else return window.alert("Wrong email format!");
    };

    const handleLogout = () => {
        dispatch({
            type: 'SET_STATE',
            payload: { loginState: false }
        });
    };

    useEffect(setWidth, []);

    return (
        <>
            {!isSmall &&
                <nav className="nav-desktop">
                    <ul>
                        <li><Link to={props.page}>{props.page}</Link></li>

                        {!loginState && 
                            <>
                            <li className="signin">
                            <div className="cta login" onClick={() => setLoginBox(!loginBox)}>Sign in</div>
                            {loginBox &&
                                <form className="login-box">
                                    <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} required />
                                    <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required />
                                    <div className="remember-user">
                                        <input type="checkbox" id="remember" />
                                        <label for="remember">Remember password</label>
                                    </div>
                                    <button className="call-login" onClick={handleSubmit}>Sign in</button>
                                    <div className="login-options">
                                        <ul>
                                            <li>Forgot my password</li>
                                            <li>|</li>
                                            <Link to="/login"><li>Don't have an account</li></Link>
                                        </ul>
                                    </div>
                                </form>
                            }
                            
                            </li>
                            <Link to="/login" ><li className="cta register">Sign up</li></Link>
                            </>
                        }

                        {loginState &&
                            <>
                            <li>
                                <div className="upload">
                                    <div className="upload-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-cloud-plus" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                        </svg>
                                    </div>
                                    <p>Upload</p>
                                </div>
                            </li>
                            <li>
                                <div className="user-area">
                                    <div className="user-info" onClick={() => setUserMenu(!userMenu)}>
                                        <img src="/default-avatar.png" alt="" />
                                        <div className="user-name">User</div>
                                    </div>
                                    {userMenu &&
                                        <div className="user-menu">
                                            <ul>
                                                <li>Profile</li>
                                                <li>Settings</li>
                                                <li onClick={handleLogout}>Logout</li>
                                            </ul>
                                        </div>
                                    }
                                    
                                </div>
                            </li>
                            
                            </>
                        }                       
                    </ul>
                </nav>
            }

            {isSmall && 
                <HeaderMenuMobile page={props.page} />
            }
        </>
    );
}