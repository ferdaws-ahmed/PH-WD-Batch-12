import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className=" m-6 text-4xl font-bold">Register now!</h1>
      <div className="card-body">
         
        <form >
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>Already have a account? <Link className='text-blue-500 hover:text-blue-600 font-bold' to='/login'>Login</Link></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;
