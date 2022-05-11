const { createContext, useState } = require("react");

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clear: () => {},
    isInCart: () => {}
})

const CartProvider = ({ children }) => {
  
    const [cart, setCart] = useState([])
 
    const addItem = (item, quantity) => {
        
        if (isInCart( item )) 
        {
            console.log('IM EDITING PRODUCT IN CART');
            console.log('Current cart ' + cart);

            console.log('INDEX:' + getCartIndex(item));

            setCart((currentCart => {
                return [...currentCart, [getCartIndex(item)].quantity = quantity];
            }));
        }
        else 
        {
            console.log('IM ADDING PRODUCT TO CART');
            console.log('Current cart ' + cart);

            setCart(currentCart => {
                return [...currentCart, {'item' : item, 'quantity' : quantity}];
            });
        }
        
    }

    const removeItem = ( itemId ) => {

        if (isInCart( itemId )) {

            setCart( currentCart => {
                return currentCart.splice(getCartIndex(itemId), 1);
            })

        }
        
    }

    const clear = () => {

        setCart( currentCart => {
            return currentCart.length = 0;
        })

    }
    
    const isInCart = ( itemId ) => {

        if(cart.findIndex(c => c.item == itemId) >= 0)
        {
            return true;
        }
        
        return false;
        
    }

    const getCartIndex = ( itemId ) => {

        let index = cart.findIndex(c => c.item == itemId);

        return index;
    }

    const context = {
      cart,
      addItem,
      removeItem,
      clear,
      isInCart,
      getCartIndex
    }
  
    return (
      <CartContext.Provider value={ context }>
        {children}
      </CartContext.Provider>
    )
  }

  export default CartProvider