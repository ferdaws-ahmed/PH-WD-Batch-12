import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.config';
const googleProvider = new GoogleAuthProvider;
const Login = () => {

    const [user, setUser] = useState(null);
    const handleLoginBtn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            
            setUser(result.user);
        })
        .catch(error =>{
            onclose.log(error)
        });
        setUser()
    }

    const handleSingOutBtn = () =>{
        signOut(auth)
        .then(()=>{
           
            setUser(null)
        })
    }
    
    return (
        <div>
            <h1>this is login</h1>
           
            
            {
                user ? <button onClick={handleSingOutBtn}>Sing Out</button> :  <button onClick={handleLoginBtn}>SignIn with Gmail</button>
            }
            
            {
                user && <div>
                    <h1>{user.displayName}</h1>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;
