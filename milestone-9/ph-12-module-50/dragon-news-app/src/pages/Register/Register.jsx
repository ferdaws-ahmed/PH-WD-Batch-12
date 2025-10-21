import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name,photo,email,password})
    }
    
    return (
        <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className='text-center text-xl font-bold mt-3'>Create Account</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            {/* name */}
                        <label className="label font-bold text-lg">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                            {/* Photo */}
                        <label className="label font-bold text-lg">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo url" />

                        <label className="label font-bold text-lg">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label font-bold text-lg">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        
                        <p>Already Have an account? <Link to='/auth/login' className= 'text-md font-bold text-blue-600'>Login</Link></p>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
        </div>
    );
};

export default Register;
