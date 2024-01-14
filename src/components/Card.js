function Card(prop){
    return(
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
            <button className="cartIcon" style={{
                width: "7%",
                height: "40px"
            }}>
                Cart Icon
            </button>
        </div>
    )
}

export default Card;