import React, { useContext } from 'react';
import signupImg from '../../../assets/images/login/login.svg'
import fb from '../../../assets/images/login/facebook.png'
import google from '../../../assets/images/login/google.png'
import github from '../../../assets/images/login/github.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { errorToast, successToast } from '../../../toast/Toaster';
import isEmail from 'validator/es/lib/isEmail';
const SignUp = () => {
    const { createUser, loading, setLoading } = useContext(AuthContext)

    // const userSignup = e => {
    //     setLoading(true)
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const photo = form.photo.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const confirmPassword = form.confirmPassword.value;

    //     const isValidEmail = /\S+@\S+\.\S+/;
    //     if (!isValidEmail.test(email)) {
    //         return error('Please Provide a Valid Email Address')
    //     }
    //     if (!isURL(photo)) {
    //         return error("Your Photo URL isn't valid!");
    //     }
    //     if (password.length < 6) {
    //         return error("Your password should be at least 6 charachters!");
    //     }
    //     if (password !== confirmPassword) {
    //         return error("password and confirm password doesn't match!");
    //     }
    //     createUser(email, password)
    //         .then(() => {
    //             updateUserData(name, photo)
    //             userEmailVerify()
    //             emailSent('Email verification link sent please check!');
    //             success('successfully created an account')
    //             logoutUser();
    //             form.reset();
    //             setLoading(false)
    //         })
    //         .catch((error) => {
    //             const errorMessage = error.message;
    //             error(errorMessage);
    //             setLoading(false)
    //         });
    // 
    const userSignup = e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const fullname = form.fullname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (!isEmail(email)) {
            return errorToast('Please Provide a Valid Email Address')
        }
        if (password.length < 6) {
            return errorToast("Your password should be at least 6 charachters!");
        }
        if (password !== confirmPassword) {
            return errorToast("password and confirm password doesn't match!");
        }
        createUser(email, password)
            .then((userCredential) => {
                // setLoading(false)
                successToast('successfully created an account')
                form.reset();
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                // ..
                console.error(errorMessage);
            });

    }
    return (
        <>
            <div className="hero my-18">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={signupImg} alt="" className='w-full h-full' />
                    </div>
                    <div className="card flex-shrink-0 max-w-sm border-2  ml-40 w-1/2">
                        <h1 className='py-1 font-semibold text-gray-700 text-center text-5xl'>Sign Up</h1>
                        <form onSubmit={userSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input type="text" name='fullname' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 border-orange-600 hover:bg-orange-500  hover:border-orange-500">
                                    Sign Up
                                </button>
                                <p className='py-5 text-gray-500 text-center'>Or Sign Up with</p>
                                <div className='grid grid-cols-3 mx-auto gap-10 mt-2'>
                                    <img src={fb} alt="" />
                                    <img src={github} alt="" />
                                    <img src={google} alt="" />
                                </div>
                                <p className=' text-gray-500 text-center mt-2'>Already have an account? <Link to="/login" className='text-orange-600 hover:text-orange-500 font-semibold'>Sign In</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;