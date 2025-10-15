import React, { useState } from 'react';

import { auth } from '../firebase/firebase.config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Register = () => {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false)
     


    
    
    const handleRegister = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(event.target.email.value)
        // console.log(event.target.password.value)

       //reset error
         setError('');

       //reset Success
         setSuccess(false)
       createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          console.log(result.user)
          setSuccess(true)
        })
        .catch(error =>{
          setError(error.message);
        })
    }



    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleRegister}>
           <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        {
          success && <p className='text-green-400'>Account Created Successfully.</p>
        }
        {
          error && <p className='text-red-500'>{error}</p>
        }
       </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;
