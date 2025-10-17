import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="text-center lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        
      <div className="card-body">
        <h1 className=" m-6 text-4xl font-bold">Login Now</h1>
        

        <form >
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <p>Are you new here? <Link className='text-blue-500 hover:text-blue-700 font-bold' to='/register'>Register</Link></p>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;
