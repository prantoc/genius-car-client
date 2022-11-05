import React, { useEffect, useState } from 'react';
import { errorToast } from '../../toast/Toaster';

const OrderRow = ({ order, deleteOrder, upStatus }) => {
    const { _id, service, serviceName, price, customer, email, phone, status } = order
    const [serviceDetails, setServiceDetails] = useState([])
    useEffect(() => {
        fetch(`https://genius-car-server-lilac-xi.vercel.app/service/${service}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
            .catch(err => errorToast(err))
    }, [service])
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => deleteOrder(_id)} className="btn btn-circle hover:bg-orange-600 border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-36 h-24">
                            {serviceDetails?.img && <img src={serviceDetails.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-60">#{service}</div>
                        <div className="text-sm opacity-60 text-orange-600 font-bold">${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
                <br />
                <span className="badge badge-ghost badge-sm">{phone}</span>

            </td>
            <th>
                <button onClick={() => upStatus(_id)} className={`btn ${status ? 'btn-success text-white' : 'bg-orange-600 border-0'} btn-md`}>{status ? status : 'Pending'}</button>
            </th>
        </tr>

    );
};

export default OrderRow;