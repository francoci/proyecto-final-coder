import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { films as filmsData } from "../data/films";
import { genres as genresData } from "../data/genres";
import Item from "./Item";

const ItemList = () => {

    // Defino useParams para filtrar por genero
    const { filmGenre } = useParams();

    // Defino los state
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState( true );
    const [navigation, setNavigation] = useState( <span>| Películas |</span> );
    const [genreCaption, setGenreCaption] = useState('');

    // Use effect para traer los datos de las peliculas
    // Se ejecuta en el montado
    useEffect(() => {

        // Simulamos con una promise, usando setTimeout de 2s
        const getFilms = new Promise( (resolve, reject) => {

            setLoading(true);
            
            setTimeout( () => {
                
                if(filmGenre != '0') {
                    
                    setNavigation( 
                        <>
                            <span>| </span>
                            <Link to={'/category/0'}>Películas</Link> 
                            <span> | {genresData.find(g => g.id == filmGenre).caption}</span>
                        </>
                    );
                    
                    resolve(filmsData.filter( f => f.genre == filmGenre));
                }
                else 
                {
                    setNavigation( <span>| Películas |</span> );
                    resolve(filmsData);
                }

            }, 2000)

        });

        getFilms.then( (result) => {

            // Caso exitoso
            console.log("Films retrieved", result);
            setFilms(result);
            setLoading(false);

        }).catch( (err) => {

            // Error
            console.log("Error retrieving films ", err);

        });


    }, [filmGenre]);

    // Rendereo las peliculas, usando un map para generar
    // componentes Item, con sus props.
    return (
        <div>
            { 
                loading ?

                    // Loader visible
                    <div className='loader'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                :
                    // Loader oculto
                    <div className="msgContainer">

                        <div className="navigationContainer">
                            {navigation}
                        </div>

                        <div>
                            {films.map( film => <Item key={film.id} filmData={film}/> )}
                        </div>
                    </div>
            }
            
        </div>
    )
}

export default ItemList