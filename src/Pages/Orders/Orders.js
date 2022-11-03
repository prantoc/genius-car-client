import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { errorToast } from '../../toast/Toaster';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => errorToast(err))
    }, [user?.email])

    return (
        <>
            <div className="overflow-x-auto w-full my-20">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Product</th>
                            <th>User</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(or => <OrderRow key={or._id} order={or}></OrderRow>)
                        }
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default Orders;