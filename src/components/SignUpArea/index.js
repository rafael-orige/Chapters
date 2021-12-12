import React from "react";

export default function SignUpArea(props) {
    return (
        <form>
            <h1>Sign up</h1>
            {props.mobile &&
                <h2>Already have an account? <strong onClick={props.signin}>Sign in</strong></h2>
            }
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Repeat your password" required/>
            <div>
                <input type="checkbox" id="agreement" required/>
                <label htmlFor="agreement">I agree with all <span>terms & conditions</span></label>
            </div>
            <button>Sign up</button>
        </form>
    );
}