const ItemListContainer = (props) => {

    return(
        <>
            <div className="msgContainer">
                {/* <h1>{props.greeting}</h1> */}
                {props.children}
            </div>
        </>
    )
}

export default ItemListContainer;