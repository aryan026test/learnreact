function Card(prop){
    const {view, CartItems, setCartItems} = prop
    const handleClick = (() =>{
        prop.setItemsNumber((prev) =>{
            return prev+1
        })
    })

    const handleCartItems = (() =>{ 
        setCartItems(CartItems =>[...CartItems, {image: prop.info.img, name: prop.info.text, price: prop.info.price}])
    })


    const handleEvents = ()=>{
        handleClick()
        handleCartItems()
    }

    return(
        <div>
            {view ? (
                <div className="card">
                    <img src={prop.info.img} alt="Log"/>
                    <div className="textAndDesc">
                        <h2>
                            {prop.info.text}
                        </h2>
                        <p style={{
                            color: "grey"
                        }}>
                            {prop.info.description}
                        </p>
                    </div>
                    <h3 style={{
                        width: "15%"
                    }}>
                        {prop.info.price}
                    </h3>
                    <button onClick={handleEvents} className="cartIcon" style={{
                        width: "7%",
                        height: "40px"
                    }}>
                        Cart Icon
                    </button>
                </div>
            ) : (
                <div className="grid-item">
                    <h4>{prop.info.text}</h4>
                    <img src={prop.info.img} alt="coffee here"></img>
                    <div className="desc">{prop.info.description}</div>
                    <div className="priceAndIcon">
                        <h4>{prop.info.price}</h4>
                        <button onClick={handleEvents}>Cart Icon</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card;