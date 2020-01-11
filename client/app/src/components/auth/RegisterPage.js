import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';

export default function RegisterPage() {

    const [username, setUsername ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    // const [history] = useState('');

    const submitSignup = async () => {
        const result = await fetch('/api/users', {
            method:'post',
            body:JSON.stringify({username, email, password, confirmpassword}),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                alert('Registered successfully!');
                return response.json();
                // console.log('Registered successfully!');
                // window.location = '/houses';
            } else if (response.status === 401) {
                alert('Password and confirmation do not match');
                return response.json();
                // console.log('Password and confirmation do not match');
            } else if (response.status === 400){
                alert('Not able to register!');
                return response.json();
                // console.log('Not able to register...');
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
        {/* <h1>I solemnly swear that I am up to no good!</h1> */}
            <img src='img/solemnlyswear.png' alt='swear'/>
            <div id="formWrapper">
                <div id="signup">
                    <h2>Register</h2>
                    <input autoComplete="off" type="text" name="username" id="username" placeholder="Name" value={username} onChange={(event)=> setUsername(event.target.value)} />
                    <input autoComplete="off" type="email" name="email" id="email" placeholder="Email" value={email} onChange={(event)=> setEmail(event.target.value)} />
                    <input autoComplete="off" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(event)=> setPassword(event.target.value)} />
                    <input autoComplete="off" type="password" name="passwordConf" id="passwordConf" placeholder="Confirm password" value={confirmpassword} onChange={(event)=> setConfirmpassword(event.target.value)} />
                    <input autoComplete="off" type="submit" value="Register" className="submit" onClick={()=> submitSignup()} />
                </div>
                <Link to="/login" >Already have a user? Login here!</Link>
            </div>
        </div>
    )
    
}