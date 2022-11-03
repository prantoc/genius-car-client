import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { errorToast } from '../../toast/Toaster';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => errorToast(err))
    }, [user?.email])

    return (
        <div>
            {orders.length}
        </div>
    );
};

export default Orders;