const ItemDetail = ({filmData}) => {
  return (
    <div className="filmCard">

        <div className="filmCardImage">
            <img src={`${process.env.PUBLIC_URL}/${filmData.pictureUrl}`} alt="Film"/>
        </div>

        <div className="filmCardText">
          <h3>{filmData.title}</h3>
          <p>{filmData.description}</p>
          <h4 id="filmCardPrice" className="price">$ {filmData.price}</h4>
        </div>

    </div>
  )
}

export default ItemDetail