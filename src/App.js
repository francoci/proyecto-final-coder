//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import HomeContainer from './components/HomeContainer';

import CartProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';

function App() {

    return(
        <>
        <AppContextProvider>
            <CartProvider>
                
                <BrowserRouter>

                    <NavBar>
                        <CartWidget></CartWidget>
                    </NavBar>

                    <Routes>
                        <Route path='/' element={<HomeContainer greeting="Proximamente"></HomeContainer>}
                        />

                        <Route path='/category' 
                            element={
                                <ItemListContainer greeting="Proximamente">
                                    <ItemList></ItemList>
                                </ItemListContainer>
                            }
                        />

                        <Route path='/category/:filmGenre' element={
                                <ItemListContainer greeting="Proximamente">
                                    <ItemList></ItemList>
                                </ItemListContainer>
                            }
                        />

                        <Route path='/item/:filmId' element={<ItemDetailContainer/>}/>

                        <Route path='/cart' element={'completar'}/>
                    </Routes>

                </BrowserRouter>

            </CartProvider>
        </AppContextProvider>
        </>
    );
}

export default App;
