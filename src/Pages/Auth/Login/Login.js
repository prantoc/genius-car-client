import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/images/login/login.svg'
import fb from '../../../assets/images/login/facebook.png'
import google from '../../../assets/images/login/google.png'
import github from '../../../assets/images/login/github.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { successToast } from '../../../toast/Toaster';

const Login = () => {
    const { signinUser } = useContext(AuthContext);
    const userSignin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signinUser(email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                successToast('successfully Logged In')
                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage);
            });
    }
    return (
        <>
            <div className="hero my-18">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 max-w-sm  border-2 h-5/6 ml-40 w-1/2">
                        <h1 className='py-1 font-semibold text-gray-700 text-center text-5xl'>Login </h1>
                        <form onSubmit={userSignin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 border-orange-600 hover:bg-orange-500  hover:border-orange-500">Login</button>
                                <p className='py-5 text-gray-500 text-center'>Or Sign In with</p>
                                <div className='grid grid-cols-3 mx-auto gap-10 mt-2'>
                                    <img src={fb} alt="" />
                                    <img src={github} alt="" />
                                    <img src={google} alt="" />
                                </div>
                                <p className=' text-gray-500 text-center mt-2'>Don't have an account? <Link to="/signup" className='text-orange-600 hover:text-orange-500 font-semibold'>Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;