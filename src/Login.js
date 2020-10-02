import React from 'react'
import './login.css'
import FbLogo from './assets/logo-fb.png';
import {auth , provider} from "./firebase"
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";

function Login() {
    const [state ,dispatch] = useStateValue();
    const signIn = () => {
        
         auth.signInWithPopup(provider)
         .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user: result.user,
            });
         }).catch((error) =>{
             alert(error.message);
         })   
    };
    return (
        <div className="login">
            <div className="login__logos">
                <img className="fb-logo" src={FbLogo}/>
                <h2>facebook</h2>
            </div>
            <button  type="submit" onClick={signIn}>
                Sign In
            </button>
        </div>
    )
}

export default Login
