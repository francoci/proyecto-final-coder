import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getFirestore, getDocs, query, collection, limit } from "firebase/firestore";
import Item from "../ItemList/Item";

const ItemList = () => {

    const [filmsHome, setFilmsHome] = useState([]);
    const [loading, setLoading] = useState( true );

    useEffect(() => {

        setLoading(true);

        const db = getFirestore();
        const filmsCollection = collection(db, "items");

        const q = query(
            filmsCollection, 
            limit(8)
        );
        
        getDocs(q).then((snapshot) => {

            if(snapshot.size > 0) {
                const filmsData = snapshot.docs.map((doc) => ({ id : doc.id, ...doc.data() }))
                setFilmsHome(filmsData);
                setLoading(false);
            }
    
        });

    }, []);

    return (
        <>
            { 
                loading ?
                    <div className='loader'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                :
                    <div className="msgContainer">

                        <div>
                            {filmsHome.map( film => <Item key={film.id} filmData={film}/> )}
                        </div>

                        <Link to='/category/0' className="catalogBtn">Ver catálogo</Link>
                    </div>
            }
            
        </>
    )
}

export default ItemList