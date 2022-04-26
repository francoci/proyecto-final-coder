const Item = ({filmData}) => {

    return (
        <div className="filmContainer">
            <div className="filmImg">
                <img src={filmData.pictureUrl} alt="Film" />
            </div>

            <div className="filmText">
                <h4>{filmData.title.length > 13 ? filmData.title.substring(0, 13) + ".." : filmData.title }</h4>
                <p>{filmData.description.substring(0, 50)}..</p>
                <h4 className="price">$ {filmData.price}</h4>
                <button>Ver más</button>
            </div>
        </div>
    )
}

export default Item