import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { films as filmsData } from "../data/films";
import { genres as genresData } from "../data/genres";
import Item from "./Item";

import { getFirestore, doc, getDoc, getDocs, query, collection, where } from "firebase/firestore";

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

        const db = getFirestore();

        setLoading(true);
        
        if(filmGenre == '0') {

            const filmsCollection = collection(db, "items");
            getDocs(filmsCollection).then((snapshot) => {

                if(snapshot.size > 0) {
                    const filmsData = snapshot.docs.map((doc) => ({ id : doc.id, ...doc.data() }))
                    setFilms(filmsData);
                }
        
            });

            setNavigation( <span>| Películas |</span> );
            setLoading(false);
        }
        else 
        {
            const filmsCollection = collection(db, "items");

            const q = query(
                filmsCollection, 
                where('genre', '==', `${filmGenre}`)
            );

            getDocs(q).then((snapshot) => {

                if(snapshot.size > 0) {
                    setFilms(snapshot.docs.map((doc) => ({ id : doc.id, ...doc.data() })));
                }
                
            });

            setNavigation( 
                <>
                    <span>| </span>
                    <Link to={'/category/0'}>Películas</Link> 
                    <span> | {genresData.find(g => g.id == filmGenre).caption}</span>
                </>
            );
            setLoading(false);
        }

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