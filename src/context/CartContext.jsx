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
  
    const addItem = ( item, quantity ) => {

        if (isInCart( item )) 
        {
            console.log('IM EDITING PRODUCT IN CART');
            setCart( currentCart => {
                return currentCart[currentCart.indexOf(currentCart.find( c => c.item == item ))].quantity = quantity
            })

        }
        else 
        {
            console.log('IM ADDING PRODUCT TO CART');
            setCart( cart.concat({
                'item' : item,
                'quantity' : quantity}
                )
            ) 
        }
        
    }

    const removeItem = ( itemId ) => {

        if (isInCart( itemId ) != undefined) {

            setCart( currentCart => {
                return currentCart.splice(currentCart.indexOf(itemId), 1);
            })

        }
        
    }

    const clear = () => {

        setCart( currentCart => {
            return currentCart.length = 0;
        })

    }
    
    const isInCart = ( itemId ) => {

        if(cart.find( c => c.item == itemId ) != undefined)
        {
            return true;
        }
        
        return false;
    }

    const context = {
      cart,
      addItem,
      removeItem,
      clear,
      isInCart
    }
  
    return (
      <CartContext.Provider value={ context }>
        {children}
      </CartContext.Provider>
    )
  }

  export default CartProvider