//Fontawesome, modulo usado para usar iconos SVG
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext';
import { useEffect } from 'react';

const CartWidget = () => {

    const { cart, totalQty, getTotalQty } = useCartContext();

    useEffect(() => {
        getTotalQty();
    }, [cart]);

    return(

        <>
            <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} className="shoppingCartIcon"/></Link>
            <div className="itemAmt">{ totalQty }</div>
        </>
        
    )
}

export default CartWidget;