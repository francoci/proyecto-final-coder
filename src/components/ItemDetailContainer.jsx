import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { films as filmsData} from "../data/films";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc, getDocs, query, collection, where, limit } from "firebase/firestore";

const ItemDetailContainer = () => {

    const { filmId } = useParams();
    const [ film, setFilm ] = useState([{}]);
    const [loading, setLoading] = useState( true );

    useEffect( () => {

        setLoading(true);

        const db = getFirestore();
        const filmsCollection = collection(db, "items");
        
        const q = query(
            filmsCollection, 
            where('id', '==', `${filmId}`)
        );

        getDocs(q).then((snapshot) => {

            if(snapshot.size > 0) {
                const filmData = snapshot.docs.map((doc) => ({ id : doc.id, ...doc.data() }));
                setFilm(filmData);
            }
            
            setLoading(false);
        });

    }, [filmId]);

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
                <ItemDetail key={film.id} filmData={film[0]}/>
        }
        
    </div>
  )
}

export default ItemDetailContainer