import { Link } from "react-router-dom"

function Card(prop){
    const {view, CartItems, setCartItems,  setPageItems} = prop
    const handleClick = (() =>{
        prop.setItemsNumber((prev) =>{
            return prev+1
        })
    })

    const handleCartItems = (() =>{
        setCartItems(CartItems =>[...CartItems, {image: prop.info.img, name: prop.info.text, price: prop.info.price, productId: prop.info.pId, id: CartItems.length}])
    })


    const handleEvents = ()=>{
        handleClick()
        handleCartItems()
    }

    const CardItemsToCoffeePage = () =>{
        let updatedValue = {}
        updatedValue = {
            image: prop.info.img,
            name: prop.info.text,
            price: prop.info.price,
            desc : prop.info.description,
            productId: prop.info.pId,
            id: CartItems.length
        }
        setPageItems(prev =>updatedValue)
    }

    return(
        <div>
            {view ? (
                <div className="card">
                    <Link to={`/CoffeePage/${prop.info.id}`} onClick={CardItemsToCoffeePage}>
                        <img src={prop.info.img} alt="Log"/>
                    </Link>
                    <div className="textAndDesc">
                        <Link to={`/CoffeePage/${prop.info.id}`} onClick={CardItemsToCoffeePage} style={{color: "black"}}>
                            <h2>
                                {prop.info.text}
                            </h2>
                        </Link>
                        <Link to={`/CoffeePage/${prop.info.id}`} onClick={CardItemsToCoffeePage} style={{color: "black"}}>
                            <p style={{
                                color: "grey"
                            }}>
                                {prop.info.description}
                            </p>
                        </Link>
                    </div>
                    <h3 style={{
                        width: "15%"
                    }}>
                        {prop.info.price} RS/-
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
                    <Link style={{color:'black'}}  onClick={CardItemsToCoffeePage} to={`/CoffeePage/${prop.info.id}`}>
                        <h4>{prop.info.text}</h4>
                        <img src={prop.info.img} alt="coffee here"></img>
                        <div className="desc">{prop.info.description}</div>
                    </Link>
                    <div className="priceAndIcon">
                        <h4>{prop.info.price} RS/-</h4>
                        <button onClick={handleEvents}>Cart Icon</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card;