import { useEffect, useState } from "react";
import { films as filmsData} from "../data/films";
import Item from "./Item";

const ItemList = () => {

    // Defino el state
    const [films, setFilms] = useState([]);

    // Use effect para traer los datos de las peliculas
    // Se ejecuta en el montado
    useEffect(() => {

        // Simulamos con una promise, usando setTimeout de 2s
        const getFilms = new Promise( (resolve, reject) => {

            setTimeout( () => {

                resolve(filmsData);

            }, 2000)

        });

        getFilms.then( (result) => {

            // Caso exitoso
            console.log("Films retrieved", result);
            setFilms(result);

        }).catch( (err) => {

            // Error
            console.log("Error retrieving films ", err);

        });

    }, []);

    // Rendereo las peliculas, usando un map para generar
    // componentes Item, con sus props.
    return (
        <div>
            {films.map( film => <Item key={film.id} filmData={film}/> )}
        </div>
    )
}

export default ItemList