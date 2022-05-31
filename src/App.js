import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/NavBar/CartWidget';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemList from './components/ItemList/ItemList';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import HomeContainer from './components/Home/HomeContainer';

import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import CheckoutFormContainer from './components/Checkout/CheckoutFormContainer';

function App() {

    return(
        <>
            <CartProvider>
                <BrowserRouter>
                    <NavBar>
                        <CartWidget></CartWidget>
                    </NavBar>

                    <Routes>
                        <Route path='/' element={<HomeContainer greeting="¡Bienvenido a Letterboxd!"></HomeContainer>}/>

                        <Route path='/category' 
                            element={
                                <ItemListContainer>
                                    <ItemList greeting="Películas"></ItemList>
                                </ItemListContainer>
                            }
                        />

                        <Route path='/category/:filmGenre' element={
                                <ItemListContainer>
                                    <ItemList greeting="Películas"></ItemList>
                                </ItemListContainer>
                            }
                        />

                        <Route path='/item/:filmId' element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<Cart></Cart>}/>
                        <Route path='/checkout' element={<CheckoutFormContainer></CheckoutFormContainer>}/>
                    </Routes>

                </BrowserRouter>
            </CartProvider>
        </>
    );
}

export default App;
