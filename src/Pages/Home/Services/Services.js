import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';
const Services = () => {
    const [services, setServices] = useState([]);
    const searchRef = useRef();
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    return (
        <div className='pb-10'>
            <div className='py-20'>
                <p className='text-2xl font-bold text-orange-600 text-center'>Services</p>
                <h2 className='text-5xl font-bold text-center py-8'>Our Service Area</h2>
                <p className='text-gray-400 text-center w-1/2 mx-auto '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <div className="text-center mt-5">
                    <input ref={searchRef} type="text" placeholder="Search......" className="input input-bordered w-full max-w-xs" />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(sv => <ServiceCard key={sv._id} service={sv}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;