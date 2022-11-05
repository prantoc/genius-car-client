import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { errorToast, successToast } from '../../toast/Toaster';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, loading, setLoading, userLogout } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://genius-car-server-lilac-xi.vercel.app/orders?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    userLogout()
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
            .catch(err => errorToast(err))
    }, [user?.email, setLoading, userLogout])

    //delete button process
    const deleteOrder = (id) => {
        const proceed = window.confirm('Are your sure you want to cancel this order')
        if (proceed) {
            setLoading(true)
            fetch(`https://genius-car-server-lilac-xi.vercel.app/orders/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
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
        fetch(`https://genius-car-server-lilac-xi.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
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