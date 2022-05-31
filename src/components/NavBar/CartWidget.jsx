//Fontawesome, modulo usado para usar iconos SVG
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import React from 'react';

const CartWidget = () => {

    const { cart, getTotalQty } = useCartContext();

    return(

        <>
            <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} className="shoppingCartIcon"/></Link>
            <div className="itemAmt">{ getTotalQty() }</div>
        </>
        
    )
}

export default CartWidget;