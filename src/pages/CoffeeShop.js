import React, { useState } from 'react'
import Coffee from '../images/expresso.jpg'
import Americano from '../images/americano.jpg'
import LongBlack from '../images/long_black.jpg'
import DoubleEspresso from '../images/double_expresso.jpg'
import BlackEye from '../images/black_eye.jpg'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const CoffeeShop = (prop) => {
  const {value} = prop
  const {ItemsNumber,setItemsNumber, CartItems,  setCartItems} = value

  const [toggleView, setToggleView] = useState(false)

  const CoffeeInfo = [
    {
      img: Coffee,
      text: "Espresso",
      description: "The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.",
      price: 50,
      id: 1
    },
    {
      img: DoubleEspresso,
      text: "Double Espresso",
      description: "A double espresso may also be listed as doppio, which is the Italian word for double. This drink is highly concentrated and strong.",
      price: 100,
      id: 2
    },
    {
      img: Americano,
      text: "Red Eye",
      description: "The red eye's purpose is to add a boost of caffeine to your standard cup of coffee",
      price: 120,
      id: 3
    },
    {
      img: BlackEye,
      text: "Black Eye",
      description: "The black eye is just the doubled version of the red eye and is very high in caffeine.",
      price: 5,
      id: 4
    },
    {
      img: Americano,
      text: "Americano",
      description: "Americanos are popular breakfast drinks and thought to have originated during World War II. Soldiers would add water to their coffee to extend their rations farther. The water dilutes the espresso while still maintaining a high level of caffeine",
      price: 5,
      id: 5
    },
    {
      img: LongBlack,
      text: "Long Black",
      description: "The long black is a similar coffee drink to the americano, but it originated in New Zealand and Australia. It generally has more crema than an americano.",
      price: 5,
      id: 6
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
