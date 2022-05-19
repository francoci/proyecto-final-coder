const { createContext, useState, useContext } = require("react");

export const CartContext = createContext({})

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalQty, setTotalQty] = useState(0)
    
    // Funcion para validar si el item esta en el carrito
    const isInCart = ( itemId ) => {
        return cart.find(prod => prod.id === itemId);
    }

    // Funcion para agregar un producto al carrito
    const addItem = (item, quantity) => {

        // Trabajamos sobre este carrito nuevo para
        // no usar el original y romper los datos
        const newCart = [...cart];

        // Guardamos el resultado de isInCart para el producto
        // en una variable. Tambien se puede hacer directo en el if
        const productInCart = isInCart(item.id);

        // Si el producto (item) esta en el cart
        if(productInCart) {

            // Buscamos el producto en el cart y modificamos la propiedad
            // qty. Le sumamos el valor de quantity, que llega como parametro
            newCart[newCart.findIndex(prod => prod.id === productInCart.id)].qty += quantity;

            // Seteamos el state de cart con el newCart
            setCart(newCart);
            return 
        }
        
        // No esta en el cart
        // Le concatenamos la propiedad qty al producto (item)
        item.qty = quantity;

        // Seteamos el cart con el newCart, agregandole el item nuevo
        setCart([...newCart, item]);
    }

    // Funcion para eliminar un producto del carrito
    const removeItem = ( itemId ) => {

        // Trabajamos sobre este carrito nuevo para no usar el original y romper los datos
        const newCart = [...cart];

        // Guardamos el resultado de isInCart para el producto en una variable.
        const productInCart = isInCart(itemId);

        // Si el producto no esta en el cart
        if(!productInCart){
            return
        }

        // Usamos filter para sacar el producto a eliminar del cart
        const deleteProduct = newCart.filter((prod) => prod.id !== itemId);

        // Seteamos el cart sin el producto eliminado
        setCart(deleteProduct);
    }

    const clear = () => {

        // Seteamos el cart como un array vacio
        setCart([]);
    }

    const getTotal = () => {
        const newCart = [...cart];
        let subtotal = 0;

        newCart.forEach(item => 
            subtotal += item.qty * item.price
        );
        
        setTotal(subtotal);
    }

    const getTotalQty = () => {
        const newCart = [...cart];
        let subtotal = 0;

        newCart.forEach(item => 
            subtotal += item.qty
        );
        
        setTotalQty(subtotal);
    }

    const context = {
      cart,
      addItem,
      removeItem,
      clear,
      isInCart,
      getTotal,
      total,
      getTotalQty,
      totalQty
    }
    
    // console.log(cart);

    return (
      <CartContext.Provider value={ context }>
        {children}
      </CartContext.Provider>
    )
  }

  export default CartProvider