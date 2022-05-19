import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext';

import CartItems from './CartItems';

const Cart = () => {

    // Traigo el carrito desde el cart context
    const { cart, total, getTotal, removeItem } = useCartContext();

    useEffect(() => {
        getTotal();
    }, [cart])

    const onRemove = (itemId) => {
        removeItem(itemId);
    }
    
    return (
        <>

        {
            cart.length == 0 ?
            <div className="cartMessage">
                <h2>No se encontraron productos.</h2>
                <Link to='/category/0'>Ir a home</Link>
            </div> 
            :
            <CartItems cart={cart} total={total} onRemove={onRemove}></CartItems>
        }
            
        </>
    )
}

export default Cart