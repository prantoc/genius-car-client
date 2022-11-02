import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service
    console.log(service);
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
            <figure className='p-6'><img src={img} alt="Shoes" className='rounded-xl w-full h-36' /></figure>
            <div className="card-body">
                <h2 className="card-title"><Link>{title}</Link></h2>
                <div className="card-actions flex justify-between text-gray-700">
                    <p className=' text-xl text-orange-600 font-bold'>Price : $ {price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <FaArrowRight className='mt-3 text-orange-600 ' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;