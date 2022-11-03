import React from 'react';

const OrderRow = ({ order }) => {
    console.log(order)
    const { service, serviceName, price, customer, email, phone } = order
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    {/* <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div> */}
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