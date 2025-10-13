import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.config';
const googleProvider = new GoogleAuthProvider;
const Login = () => {

    const handleLoginBtn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result)
        })
        .catch(error =>{
            onclose.log(error)
        });
        
    }
    
    return (
        <div>
            <h1>this is login</h1>
            <button onClick={handleLoginBtn}>SignIn with Gmail</button>
        </div>
    );
};

export default Login;
