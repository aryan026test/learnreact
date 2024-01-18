import React, { useState } from 'react'
import Coffee from '../images/expresso.jpg'
import Card from '../components/Card'

const CoffeeShop = (prop) => {
  const {value} = prop
  const {ItemsNumber,setItemsNumber, CartItems,  setCartItems} = value

  const [toggleView, setToggleView] = useState(false)

  const CoffeeInfo = [
    {
      img: Coffee,
      text: "Espresso",
      description: "The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.",
      price: "5 RS/- ",
    },
    {
      img: Coffee,
      text: "Double Espresso",
      description: "A double espresso may also be listed as doppio, which is the Italian word for double. This drink is highly concentrated and strong.",
      price: "5 RS/- ",
    },
    {
      img: Coffee,
      text: "Expresso",
      description: "The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.",
      price: "5 RS/- ",
    },
    {
      img: Coffee,
      text: "Expresso",
      description: "The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.",
      price: "5 RS/- ",
    },
  ]

  const CoffeeList = CoffeeInfo.map((element, index)=>{
    return <Card view={toggleView} CartItems={CartItems} setCartItems={setCartItems} ItemsNumber={ItemsNumber} setItemsNumber={setItemsNumber} info={element} key={index} />
  })

  const ChangeToGrid = ()=>{
    setToggleView((prev) =>{
      return false
    })
  }

  const ChangeToList = ()=>{
    setToggleView((prev) =>{
      return true;
    })
  }

  return (
    <div>
      <div>
        <button onClick={ChangeToGrid}>Grid View</button>
        <button onClick={ChangeToList}>List View</button>
      </div>
      <div className={toggleView ? "" : "Class-grid"}> 
        {CoffeeList}
      </div>
    </div>
  )
}


export default CoffeeShop
