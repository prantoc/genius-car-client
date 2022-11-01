import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
    const { title, img, price } = service
    console.log(service);
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure className='p-4'><img src={img} alt="Shoes" className='rounded-xl h-36 w-100' /></figure>
            <div className="card-body">
                <h2 className="card-title"><Link>{title}</Link></h2>
                <div className="card-actions flex justify-between text-gray-700">
                    <p className=' text-xl text-orange-600 font-bold'>Price : $ {price}</p>
                    <Link>
                        <FaArrowRight className='mt-3 text-orange-600 ' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;