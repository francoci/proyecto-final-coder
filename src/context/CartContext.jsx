const { createContext, useState, useContext } = require("react");

export const CartContext = createContext({})

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  
    const [cart, setCart] = useState([])
    
    const isInCart = ( itemId ) => {
        return cart.find(prod => prod.id === itemId);
    }

    const addItem = (item, quantity) => {

        const newCart = [...cart];
        const productInCart = isInCart(item.id);

        if(productInCart) {

            newCart[newCart.findIndex(prod => prod.id === productInCart.id)].qty += quantity;
            setCart(newCart);
            return 
        }
        
        item.qty = quantity;
        setCart([...newCart, item]);
    }

    const removeItem = ( itemId ) => {

        const newCart = [...cart];
        const productInCart = isInCart(itemId);

        if(!productInCart){
            return
        }

        const deleteProduct = newCart.filter((prod) => prod.id !== itemId);
        setCart(deleteProduct);
    }

    const clear = () => {
        setCart([]);
    }

    const getTotal = () => {
        const newCart = [...cart];
        let subtotal = 0;

        newCart.forEach(item => 
            subtotal += item.qty * item.price
        );
        
        return subtotal;
    }

    const getTotalQty = () => {
        const newCart = [...cart];
        let subtotal = 0;

        newCart.forEach(item => 
            subtotal += item.qty
        );
        
        return subtotal;
    }

    const context = {
      cart,
      addItem,
      removeItem,
      clear,
      isInCart,
      getTotal,
      getTotalQty
    }

    return (
      <CartContext.Provider value={ context }>
        {children}
      </CartContext.Provider>
    )
  }

  export default CartProvider