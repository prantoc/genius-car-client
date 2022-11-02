import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext)
    const handlePlaceOrder = e => {
        e.preventDefault()
        const form = e.target
        const name = `${form.firstname.value} ${form.lastname.value}`
        const email = user?.email || 'unregistered'
        const phone = form.phone.value

        const order = {
            service: _id,
            serviceName: title,
            price: price,
            customer: name,
            email,
            phone
        }
    }
    return (
        <div className='py-10'>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="text-center">
                        <h2 className='font-semibold '>Item Name - <span className='text-orange-600'>{title}</span></h2>
                        <h2 className='font-semibold '>Item Price - <span className='text-orange-600'>${price}</span></h2>
                    </div>
                    <form onSubmit={handlePlaceOrder}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input type="text" name='firstname' placeholder="First Name" className="input input-bordered w-full m-5" />
                            <input type="text" name='lastname' placeholder="Last Name" className="input input-bordered w-full m-5" />
                            <input type="text" name='email' placeholder="Email" className="input input-bordered w-full m-5" defaultValue={user?.email} />
                            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full m-5" />
                        </div>
                        <button className="w-full text-center btn bg-orange-600 border-orange-600 hover:bg-orange-500  hover:border-orange-500">
                            Place To Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;