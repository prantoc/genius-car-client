import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="relative w-1/2">
                        <img alt='' src={person} className="w-4/5 h-full rounded-lg shadow-2xl" />
                        <img alt='' src={parts} className="absolute w-80 h-4/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-1/2">
                        <p className='text-xl font-bold text-orange-600'>About Us</p>
                        <h1 className="text-5xl font-bold leading-normal">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="pt-2 pb-10">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn bg-orange-600 border-orange-600 hover:bg-orange-800 hover:border-orange-800">Get More Info</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;