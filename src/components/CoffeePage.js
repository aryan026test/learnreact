import React, { useState } from "react";

const CoffeePage = (prop) => {
  const { value } = prop;
  const { ItemsNumber, pageItems, setCartItems, setItemsNumber } = value;
  const [ ItemsAdded, setItemsAdded ] = useState(0)

  const handleClick = () => {
    setItemsNumber((prev) => {
      return prev + 1;
    });
  };

  const handleCartItems = () => {
    setCartItems((CartItems) => [
      ...CartItems,
      {
        image: pageItems.image,
        name: pageItems.name,
        price: pageItems.price,
        productId: pageItems.productId,
        id: CartItems.length,
      },
    ]);
  };

  const handleEvents = () => {
    setItemsAdded((prev) => prev+1)
    handleClick();
    handleCartItems();
  };

  const handleEvents2 = () => {
    if(ItemsNumber === 0){
      return;
    }else{
      setItemsNumber((prev) =>{
        return prev-1;
      })
    }

    setItemsAdded((prev) => prev-1)

    setCartItems((prev) =>{
      let temp = []
      let idToBeRemoved = find(prev)
      prev.forEach(element => {
        if(element.id !== idToBeRemoved){
          temp.push(element)
        }
      });
      return temp
    })
  }

  const find = (arr) => {
    let ans = 0;
    arr.forEach(element => {
      if(pageItems.productId === element.productId){
        ans = element.id
      }
    });
    return ans
  }

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

export default CoffeePage;
