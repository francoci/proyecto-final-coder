import React, { createContext, useContext, useEffect, useState } from 'react'
import { films as filmsData } from "../data/films";

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        // Simulamos con una promise, usando setTimeout de 2s
        const getFilms = new Promise( (resolve, reject) => {
            resolve(filmsData);
        });

        getFilms.then( (result) => {
            setProducts(result);
        })
    });

    return (
        <AppContext.Provider value={{products}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
