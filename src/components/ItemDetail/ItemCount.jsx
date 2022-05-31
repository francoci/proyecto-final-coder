import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, onAdd}) => {

    const [ count, setCount ] = useState(1);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div className="qtyCounter">
                <button className="qtyBtns" onClick={decrement} disabled={count == 1}>-</button>
                <div className="qtyText"> {count} </div>
                <button className="qtyBtns" onClick={increment} disabled={count >= stock}>+</button>
            </div>

            <button className="addToCart" onClick={ () => {
                onAdd(count);
            } }>
                
            <FontAwesomeIcon icon={faShoppingCart} className="addToCartIcon"/>
            Add
            </button>
        </>
    )
}

export default ItemCount