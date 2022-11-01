import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='pb-10'>
            <div className='py-20'>
                <p className='text-2xl font-bold text-orange-600 text-center'>Services</p>
                <h2 className='text-5xl font-bold text-center py-8'>Our Service Area</h2>
                <p className='text-gray-400 text-center w-1/2 mx-auto '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(sv => <ServiceCard key={sv._id} service={sv}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;