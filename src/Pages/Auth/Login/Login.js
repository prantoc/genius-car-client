import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/images/login/login.svg'
import fb from '../../../assets/images/login/facebook.png'
import google from '../../../assets/images/login/google.png'
import github from '../../../assets/images/login/github.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { errorToast, successToast } from '../../../toast/Toaster';

const Login = () => {
    const { signinUser, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const userSignin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        setLoading(true)
        signinUser(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                setLoading(false)
                successToast('successfully Logged In')
                form.reset();
                fetch(`http://localhost:5000/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        //#localstorage is a easy way to store jwt token but not the best way to store 
                        localStorage.setItem('genius-token', data.token)
                    })
                // navigate(from, { replace: true });
            })
            .catch((error) => {
                setLoading(false)
                const errorMessage = error.message;
                errorToast(errorMessage);
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
                                <button className="btn bg-orange-600 border-orange-600 hover:bg-orange-500  hover:border-orange-500">   {loading ? 'Logging.....' : 'Login'}</button>
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