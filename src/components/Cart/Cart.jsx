import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';

import CartItems from './CartItems';
import './Cart.css';

const Cart = () => {

    const { cart, getTotal, getTotalQty, removeItem } = useCartContext();

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
            <CartItems cart={cart} total={getTotal()} onRemove={onRemove} totalQty={getTotalQty()}></CartItems>
        }
            
        </>
    )
}

export default Cart