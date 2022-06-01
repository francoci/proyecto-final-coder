import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, getDocs, query, collection, where, limit } from "firebase/firestore";

import './ItemDetail.css';

const ItemDetailContainer = () => {

    const { filmId } = useParams();
    const [ film, setFilm ] = useState([{}]);
    const [loading, setLoading] = useState( true );
    const [productExists, setProductExists] = useState( true );

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
            else 
            {
                setProductExists( false );
            }
            
            setLoading(false);
        }).catch((err) => {
            setProductExists( false );
        });

    }, [filmId]);

  return (
    <div>
        {
            loading ?
            
                <div className='loader'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            : productExists ?
                <ItemDetail key={film.id} filmData={film[0]}/>
                : <div className="msgContainer">
                    <h2>Oops, hubo un error.</h2>
                    <h3>Producto no encontrado.</h3>
                    <Link to='/' className="homeBtn">Ir a Home</Link>
                  </div>
        }
        
    </div>
  )
}

export default ItemDetailContainer