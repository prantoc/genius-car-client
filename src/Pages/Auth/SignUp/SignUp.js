import React from 'react';
import loginImg from '../../../assets/images/login/login.svg'
import fb from '../../../assets/images/login/facebook.png'
import google from '../../../assets/images/login/google.png'
import github from '../../../assets/images/login/github.png'
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <>
            <div className="hero my-18">
                <div className="hero-content flex-col lg:flex-row">
                    <div >
                        <img src={loginImg} alt="" className='w-full h-full' />
                    </div>
                    <div className="card flex-shrink-0 max-w-sm border-2  ml-40 w-1/2">
                        <h1 className='py-1 font-semibold text-gray-700 text-center text-5xl'>Sign Up</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 border-orange-600 hover:bg-orange-500  hover:border-orange-500">Sign Up</button>
                                <p className='py-5 text-gray-500 text-center'>Or Sign Up with</p>
                                <div className='grid grid-cols-3 mx-auto gap-10 mt-2'>
                                    <img src={fb} alt="" />
                                    <img src={github} alt="" />
                                    <img src={google} alt="" />
                                </div>
                                <p className=' text-gray-500 text-center mt-2'>Already have an account? <Link to="/login" className='text-orange-600 hover:text-orange-500 font-semibold'>Sign In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;