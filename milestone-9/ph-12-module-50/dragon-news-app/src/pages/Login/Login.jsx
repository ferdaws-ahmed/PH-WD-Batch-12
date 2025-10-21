
import { Link } from 'react-router';


const Login = () => {
  
    
    return (
        
        <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className='text-center text-xl font-bold mt-3'>Login Your Account</h1>
                    <form  className="card-body">
                        <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <p>Don't Have an account? <Link to='/auth/register' className= 'text-md font-bold text-blue-600'>Register</Link></p>
                        <button  className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>

                
        </div>
    );
};

export default Login;
