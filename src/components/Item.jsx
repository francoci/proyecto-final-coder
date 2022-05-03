import { Link } from "react-router-dom"

const Item = ({filmData}) => {

    return (
        <div className="filmContainer">
            <div className="filmImg">
                <img src={`${process.env.PUBLIC_URL}/${filmData.pictureUrl}`} alt="Film" />
            </div>

            <div className="filmText">
                <h4>{filmData.title.length > 13 ? filmData.title.substring(0, 13) + ".." : filmData.title }</h4>
                <p>{filmData.description.substring(0, 50)}..</p>
                <h4 className="price">$ {filmData.price}</h4>
                <Link to={`/item/${filmData.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item