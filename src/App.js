//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';

function App() {

    return(
        <>
            <NavBar>
                <CartWidget></CartWidget>
            </NavBar>

            <ItemListContainer greeting="Proximamente">
                <ItemList></ItemList>
            </ItemListContainer>

        </>
    );
}

export default App;
