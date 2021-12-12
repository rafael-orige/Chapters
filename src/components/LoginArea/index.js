import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function LoginArea(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(email.match(pattern) && password !== "") {
            dispatch({
                type: 'SET_STATE',
                payload: { loginState: true }
            })
            history.push("/search");
        } else return window.alert("Wrong email format!");
    }

    return (
        <form>
            <h1>Sign in</h1>
            {props.mobile &&
                <h2>Don't have an account? <strong onClick={props.signup}>Sign up</strong></h2>
            }
            <input type="email" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }}/>
            <input type="password" placeholder="Password" required onChange={(e) => { setPassword(e.target.value) }}/>
            <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <button onClick={handleSubmit}>Sign in</button>
            <p>Forgot my password</p>
        </form>
    );
}