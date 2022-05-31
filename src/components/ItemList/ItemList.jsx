import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";

import { getFirestore, getDocs, query, collection, where, limit } from "firebase/firestore";

const ItemList = ({greeting}) => {

    const { filmGenre } = useParams();

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState( true );
    const [navigation, setNavigation] = useState( <span>| Películas |</span> );

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
            const genresCollection = collection(db, "genres");

            const q = query(
                filmsCollection, 
                where('genre', '==', `${filmGenre}`)
            );

            getDocs(q).then((snapshot) => {

                if(snapshot.size > 0) {
                    setFilms(snapshot.docs.map((doc) => ({ id : doc.id, ...doc.data() })));
                }
                
            });

            const q2 = query(
                genresCollection, 
                where('id', '==', `${filmGenre}`),
                limit(1)
            );

            getDocs(q2).then((snapshot) => {

                if(snapshot.size > 0) {
                    setNavigation( 
                        <>
                            <span>| </span>
                            <Link to={'/category/0'}>Películas</Link> 
                            <span> | {snapshot.docs[0].data().caption}</span>
                        </>
                    );
                }
                
            });

            setLoading(false);
        }

    }, [filmGenre]);

    return (
        <div>
            { 
                loading ?
                    <div className='loader'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                :
                    <div className="msgContainer">
                        <h2>{ greeting }</h2>

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