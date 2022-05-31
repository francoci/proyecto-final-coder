import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartItems = ({cart, total, onRemove, totalQty}) => {
  return (
      <>
        <div className="cartView">

            <div className="cartProducts">

            <div className="cartTitle">
                <h2>Carrito</h2>
            </div>
            {
                cart.map( film => 
                    <>
                        <div key={film.id} className="cartProduct">
                            <div className="cartProductImg">
                                <img src={`${process.env.PUBLIC_URL}/${film.pictureUrl}`} alt="Film" />
                            </div>
                            <div className="cartProductText">
                                <h3>{film.title}</h3>
                                <p>{film.description}</p>
                            </div>
                            <div className="cartProductQty">
                                <h3>{film.qty} x ${film.price}</h3>
                            </div>
                            <button className="deleteFromCartBtn"
                                onClick={() => {
                                    onRemove(film.id)
                                }}
                            >
                                <FontAwesomeIcon icon={faTrashCan} className="deleteFromCartIcon"/>
                            </button>
                        </div>
                    </>
                )
            }

            </div>

            <div className="cartTotal">
                <h2>Total</h2>
                <h3 id="totalPrice">Items x { totalQty } - $ { total }</h3>
                <Link to='/checkout' className="cartEnd">Finalizar Compra</Link>
            </div>
        </div>
    </>
  )
}

export default CartItems