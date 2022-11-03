import React, { useEffect, useState } from 'react';
import { errorToast } from '../../toast/Toaster';

const OrderRow = ({ order }) => {
    console.log(order)
    const { service, serviceName, price, customer, email, phone } = order
    const [serviceDetails, setServiceDetails] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/service/${service}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
            .catch(err => errorToast(err))
    }, [service])
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-48 h-36">
                            <img src={serviceDetails.img} alt="Avatar Tailwind CSS Component" />
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>

    );
};

export default OrderRow;