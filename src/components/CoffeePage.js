import React, { useState } from "react";
import { addToCart, removeFromCart } from "../redux";
import { connect } from "react-redux";

const CoffeePage = (prop) => {
  const { cartItems, value, pageItems } = prop;
  const [ItemsAdded, setItemsAdded] = useState(0);

  const handleEvents = () => {
    setItemsAdded((prev) => prev + 1);
    prop.addToCart({
      image: pageItems.image,
      name: pageItems.name,
      price: pageItems.price,
      productId: pageItems.productId,
      id: cartItems.length,
    });
  };

  const handleEvents2 = () => {
    if (ItemsAdded > 0) {
      if (prop.itemsNumber == 0) {
        return;
      } else {
        prop.removeFromCart(find(cartItems));
      }
      setItemsAdded((prev) => prev - 1);
    }
  };

  const find = (arr) => {
    let ans = 0;
    arr.forEach((element) => {
      if (pageItems.productId === element.productId) {
        ans = element.id;
      }
    });
    return ans;
  };

  return (
    <div className="coffeeClick">
      <img src={pageItems.image} alt="This is the coffee" />
      <div className="content">
        <h1>{pageItems.name}</h1>
        <h4>{pageItems.desc}</h4>
        <div className="buttons">
          <button onClick={handleEvents}>+</button>
          <h3>{ItemsAdded}</h3>
          <button onClick={handleEvents2}>-</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsNumber: state.itemNumber,
    pageItems: state.items.pageItems,
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    addToCart: (obj) => dispatch(addToCart(obj)),
    removeFromCart: (valueId) => dispatch(removeFromCart(valueId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(CoffeePage);
