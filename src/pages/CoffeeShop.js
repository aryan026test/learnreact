import React from 'react'
import Coffee from '../images/expresso.jpg'
import Card from '../components/Card'

const CoffeeShop = () => {

  const i = [
    {
      img: Coffee,
      text: "Espresso",
      description: "The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.",
      price: "5 RS/- ",
    },
    {
      img: Coffee,
      text: "Expresso",
      description: "This is a coffee type.",
      price: "5 RS/- ",
    },
    {
      img: Coffee,
      text: "Expresso",
      description: "This is a coffee type.",
      price: "5 RS/- ",
    },
    {
      img: Coffee,
      text: "Expresso",
      description: "This is a coffee type.",
      price: "5 RS/- ",
    },
  ]

  const b = i.map((element, index)=>{
    return <Card info={element} key={index} />
  })
  return (
    <div>
      <div className='card_cont'>
        {b}
      </div>
    </div>
  )
}


export default CoffeeShop
