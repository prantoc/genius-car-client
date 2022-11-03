import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { errorToast, successToast } from '../../toast/Toaster';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
            .catch(err => errorToast(err))
    }, [user?.email, setLoading])

    //delete button process
    const deleteOrder = (id) => {
        const proceed = window.confirm('Are your sure you want to cancel this order')
        if (proceed) {
            setLoading(true)
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    successToast('The order canceled successfully')
                    setOrders(data)
                    setLoading(false)
                })
                .catch(err => errorToast(err))
        }
    }
    const upOdrSta = (id) => {
        setLoading(true)
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                successToast('The order status updated successfully')
                setOrders(data)
                setLoading(false)
            })
            .catch(err => errorToast(err))
    }

    return (
        <>
            <div className="overflow-x-auto w-full my-20">
                {/* <h2>  {orders.length}</h2> */}

                <table className="table w-full">
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
                            loading ? ''
                                :
                                orders.map(or => <OrderRow key={or._id} order={or} deleteOrder={deleteOrder} upStatus={upOdrSta}></OrderRow>)

                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Orders;