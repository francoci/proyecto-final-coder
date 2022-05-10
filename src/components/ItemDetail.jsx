import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from './ItemCount';

const ItemDetail = ({filmData}) => {

  const cartContext = useContext(CartContext);

  const [qty, setQty] = useState(0);

  const onAdd = (quantityToAdd) => {

    	setQty(quantityToAdd);

			cartContext.addItem(filmData.id, quantityToAdd);

			console.log(cartContext.cart);
  }

  return (
    <div className="filmCard">

        <div className="filmCardImage">
            <img src={`${process.env.PUBLIC_URL}/${filmData.pictureUrl}`} alt="Film"/>
        </div>

        <div className="filmCardText">
          <h3>{filmData.title}</h3>
          <p>{filmData.description}</p>
          <h4 id="filmCardPrice" className="price">$ {filmData.price}</h4>

          { 
            qty != 0 ? 
						<Link to='/cart' className="cartRedirect">Terminar compra</Link> : 
						<ItemCount stock={filmData.stock} onAdd={onAdd}></ItemCount>
          }
          
        </div>

    </div>
  )
}

export default ItemDetail