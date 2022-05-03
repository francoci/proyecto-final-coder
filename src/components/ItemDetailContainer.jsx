import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { films as filmsData} from "../data/films";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const { filmId } = useParams();
    const [ film, setFilm ] = useState({});
    const [loading, setLoading] = useState( true );

    useEffect( () => {

        const getFilmDetail = new Promise( (resolve, reject) => {

            setTimeout( () => {

                resolve(filmsData.find( f => f.id == filmId));

            }, 2000);

        });

        getFilmDetail.then( (result) => {

            // Caso exitoso
            console.log("Film detail retrieved", result);
            setFilm(result);
            setLoading(false);

        }).catch( (err) => {

            // Error
            console.log("Error retrieving film details", err);

        });

    });

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
                <ItemDetail key={film.id} filmData={film}/>
        }
        
    </div>
  )
}

export default ItemDetailContainer