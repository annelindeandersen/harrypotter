import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import jwt from "jwt-decode";

// import axios from 'axios';

export default function LoginPage() {

    const [loginEmail, setLoginEmail ] = useState('');
    const [loginPassword, setLoginPassword ] = useState('');
    // const [session, setSession] = useState('');

    const submitLogin = async () => {
        // e.preventDefault();

        const result = await fetch('/api/auth', {
            method:'post',
            body:JSON.stringify({loginEmail, loginPassword}),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                alert('Logged in!');
                response.json();
                window.location.assign('/profile');
            } else if (response.status === 401) {
                alert('Wrong password or email');
                // console.log('Wrong password or email');
                return response.json();
            } else if (response.status === 400){
                alert('Not able to login!');
                // console.log('Not able to login...');
                return response.json();
            }
            })
            .catch(function(error) {
            alert('ERROR:', error);
            console.log('error...')
            })
        console.log(result)
    }

    return (
        <div id="loginWrapper">
            <img src='img/solemnlyswear.png' alt='swear'/>
            <div id="formWrapper">
                <div id="login">
                    <h2>Login</h2>
                    {/* <p>Response: {response}</p> */}
                    {/* {setResponse ? <p>{response}</p> : null} */}
                    <input type="email" name="loginEmail" id="loginEmail" placeholder="Email" value={loginEmail} onChange={(event)=> setLoginEmail(event.target.value)} />
                    <input type="password" name="loginPassword" id="loginPassword" placeholder="Password" value={loginPassword} onChange={(event)=> setLoginPassword(event.target.value)} />
                    <input type="submit" value="Login" className="submit" onClick={()=> submitLogin()} />
                </div>
                <Link to="/" >Don't have a user? Register here!</Link>
            </div>
        </div>
    )
    
}