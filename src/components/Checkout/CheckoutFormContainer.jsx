import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import CheckoutForm from './CheckoutForm';

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

import './Checkout.css';

const CheckoutFormContainer = () => {

    const { cart, getTotal, getTotalQty, clear } = useCartContext();

    const [orderStatus, setOrderStatus] = useState(1);

    useEffect(() => {

        if(cart.length > 0){
            setOrderStatus(2);
        }

    }, [cart])

    const onCheckout = (checkoutData) => {

        const db = getFirestore();
        const orders = collection(db, "orders");
        const orderItems = collection(db, "orderItems");

        addDoc(orders, checkoutData).then(({id}) => {

            let orderItemsObj = {
                orderId: id,
                cartItems: cart
            }

            addDoc(orderItems, orderItemsObj).then(({id}) => {
                setOrderStatus(3);
                clear();
            }).catch(err => {
                setOrderStatus(4);
                clear();
            });

        }).catch(err => {
            setOrderStatus(4);
            clear();
        });
        
    }

    return (
        <>
        {
            orderStatus == 1 ?
            <div className="cartMessage">
                <h2>No se encontraron productos.</h2>
                <Link to='/category/0'>Ir a home</Link>
            </div> 
            : orderStatus == 2 ?
            <div className="formContainer">
                <CheckoutForm total={getTotal()} totalQty={getTotalQty()} cart={cart} onCheckout={onCheckout}>
                </CheckoutForm>
            </div>
            : orderStatus == 3 ?
            <div className="cartMessage">
                <h2>¡Gracias por su compra!</h2>
                <h3>Nos pondremos en contacto pronto para gestionar el envío.</h3>
                <Link to='/category/0'>Ir a home</Link>
            </div> 
            :
            <div className="cartMessage">
                <h2>Oops, hubo un error</h2>
                <h3>Inténtalo nuevamente más tarde.</h3>
                <Link to='/category/0'>Ir a home</Link>
            </div> 
        }
            
        </>

    )
}

export default CheckoutFormContainer