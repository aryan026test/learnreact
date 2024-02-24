import { Link } from "react-router-dom";
import { addToCart, setPageItems } from "../redux";
import { connect } from "react-redux";

function Card(prop) {
  const { view, cartItems, setCartItems } = prop;

  // const handleCartItems = () => {
  //   setCartItems((CartItems) => [
  //     ...CartItems,
  //     {
  //       image: prop.info.img,
  //       name: prop.info.text,
  //       price: prop.info.price,
  //       productId: prop.info.pId,
  //       id: CartItems.length,
  //     },
  //   ]);
  // };

  const handleEvents = () => {
    prop.addToCart({
      image: prop.info.img,
      name: prop.info.text,
      price: prop.info.price,
      productId: prop.info.pId,
      id: cartItems.length,
    });
    // handleCartItems();
  };

  const pageHandler = () => {
    prop.setPageItems({
      image: prop.info.img,
      name: prop.info.text,
      price: prop.info.price,
      desc: prop.info.description,
      productId: prop.info.pId,
      id: cartItems.length,
    });
  }

  // const CardItemsToCoffeePage = () => {
  //   let updatedValue = {};
  //   updatedValue = {
  //     image: prop.info.img,
  //     name: prop.info.text,
  //     price: prop.info.price,
  //     desc: prop.info.description,
  //     productId: prop.info.pId,
  //     id: CartItems.length,
  //   };
  //   // setPageItems(prev =>updatedValue)
  // };

  return (
    <div>
      {prop.view == "list" ? (
        <div className="card">
          <Link
            to={`/CoffeePage/${prop.info.pId}`}
            onClick={() => {
              prop.setPageItems({
                image: prop.info.img,
                name: prop.info.text,
                price: prop.info.price,
                desc: prop.info.description,
                productId: prop.info.pId,
                id: cartItems.length,
              });
            }}
          >
            <img src={prop.info.img} alt="Log" />
          </Link>
          <div className="textAndDesc">
            <Link
              to={`/CoffeePage/${prop.info.id}`}
              onClick={pageHandler}
              style={{ color: "black" }}
            >
              <h2>{prop.info.text}</h2>
            </Link>
            <Link
              to={`/CoffeePage/${prop.info.id}`}
              onClick={pageHandler}
              style={{ color: "black" }}
            >
              <p
                style={{
                  color: "grey",
                }}
              >
                {prop.info.description}
              </p>
            </Link>
          </div>
          <h3
            style={{
              width: "15%",
            }}
          >
            {prop.info.price} RS/-
          </h3>
          <button
            onClick={handleEvents}
            className="cartIcon"
            style={{
              width: "7%",
              height: "40px",
            }}
          >
            Cart Icon
          </button>
        </div>
      ) : (
        <div className="grid-item">
          <Link
            style={{ color: "black" }}
            onClick={pageHandler}
            to={`/CoffeePage/${prop.info.id}`}
          >
            <h4>{prop.info.text}</h4>
            <img src={prop.info.img} alt="coffee here"></img>
            <div className="desc">{prop.info.description}</div>
          </Link>
          <div className="priceAndIcon">
            <h4>{prop.info.price} RS/-</h4>
            <button
              onClick={() => {
                prop.addToCart({
                  image: prop.info.img,
                  name: prop.info.text,
                  price: prop.info.price,
                  productId: prop.info.pId,
                  id: prop.cartItems.length,
                });
                // handleCartItems();
              }}
            >
              Cart Icon
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsNumber: state.cart.itemsNumber,
    cartItems: state.cart.cartItems,
    view: state.view.view,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (obj) => dispatch(addToCart(obj)),
    setPageItems: (obj) => {
      console.log(obj);
      dispatch(setPageItems(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
