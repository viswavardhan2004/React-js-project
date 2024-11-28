import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from './firebaseConfig';
import Footer from './Footer';
import './Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    
    // State to track confirmed and canceled orders
    const [confirmedOrders, setConfirmedOrders] = useState({});
    const [canceledOrders, setCanceledOrders] = useState({});

    useEffect(() => {
        const ordersRef = ref(database, 'orders/');
        
        onValue(ordersRef, (snapshot) => {
            const ordersData = snapshot.val();
            const ordersList = [];
            for (let id in ordersData) {
                ordersList.push({ id, ...ordersData[id] });
            }
            setOrders(ordersList);
        });
    }, []);

    const handleOrderConfirmed = (orderId) => {
        setConfirmedOrders(prev => ({ ...prev, [orderId]: true }));
    };

    const handleOrderCanceled = (orderId) => {
        setCanceledOrders(prev => ({ ...prev, [orderId]: true }));
    };

    return (
        <div>
        <div className="HeaderContainer">
            <center>
            <h1>E-Grocery Hub</h1>
            </center>
            {/* <button onClick={() => setConfirmedOrders({})}>Clear Confirmed Orders</button>
            <button onClick={() => setCanceledOrders({})}>Clear Canceled Orders</button>
            <button onClick={() => setConfirmedOrders(prev => ({...prev,...canceledOrders }))}>Confirm Cancelled Orders</button>
            <button onClick={() => setCanceledOrders(prev => ({...prev,...confirmedOrders }))}>Cancel Confirmed Orders</button>
            <button onClick={() => setConfirmedOrders({}) && setCanceledOrders({})}>Clear All Orders</button>
            <button onClick={() => setConfirmedOrders(prev => ({...prev,...orders.map(order => ({ [order.id]: true })) }))}>Confirm All Orders</button> */}
        </div>
        <div className="abc">
            <h1 className="admin-title">Admin Panel</h1>
            <h1 id="qwert" className="orders-title">Orders</h1>
        </div>
        <div className="orders-container">
            
            {orders.map((order, index) => (
                <div key={order.id} className={`order-block ${confirmedOrders[order.id] ? 'confirmed' : ''} ${canceledOrders[order.id] ? 'canceled' : ''}`}>
                    <h2>Order #{index + 1}</h2>
                    <div className="user-info">
                        <p><strong>Name:</strong> {`${order.userInfo.firstName} ${order.userInfo.lastName}`}</p>
                        <p><strong>Phone:</strong> {order.userInfo.phone}</p>
                    </div>
                    <div className="items-list">
                        <h3>Items:</h3>
                        <ul>
                            {order.cartItems.map(item => (
                                <li key={item.id}>
                                    {item.name}: Rs{item.price} x {item.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p><strong>Total Amount:</strong> Rs{order.totalAmount}</p>
                    <p><strong>Timestamp:</strong> {new Date(order.timestamp).toLocaleString()}</p>
                    <div className="status-actions">
                        <button onClick={() => handleOrderConfirmed(order.id)}>Order Confirmed</button>
                        <button onClick={() => handleOrderCanceled(order.id)}>Cancel Order</button>
                    </div>
                    {/* Display confirmation message if confirmed */}
                    {confirmedOrders[order.id] && <p className="confirmation-message">Order is Confirmed</p>}
                    {/* Display cancellation message if canceled */}
                    {canceledOrders[order.id] && <p className="cancellation-message">Order is Canceled</p>}
                </div>
            ))}
        </div>
        <Footer/>
        </div>
    );
};

export default Orders;