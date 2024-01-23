import React, { useEffect, useState } from 'react'

const CartElement = (prop) => {
  const { setItemsNumber, setCartItems, CartItems,  setFinalPrice, value } = prop
  const [show, setShow] = useState(1);
  const IncreasePrice = () => {
    setFinalPrice((prev) => prev+value.price)
  }

  useEffect(()=>{
    IncreasePrice()
  },[])

  const decreasePrice = (p) => {
    setFinalPrice((prev) => {
      return prev - p
    })
  }

  // const removeDiv = () => {
  //   setShow((prev) =>{
  //     return 0;
  //   })
  // }

  const handleEvents = () => {
    setItemsNumber((prev) => prev-1)
    decreasePrice(value.price)
    //cart items mai se value.id wala object remove kar dena hai
    setCartItems((prev)=>{
      let temp = []
      prev.forEach(element => {
        if(element.id !== value.id){
          temp.push(element)
        }
      });
      return temp
    })
  }

  console.log(value)

  return (
    <div>
      <div className='Cart-Element'>
        <img src={value.image} alt='coffee here' />
        <h2>{value.name}</h2>
        <h3>{value.price} RS/- </h3>
        <button onClick={handleEvents}><hr /></button>
      </div>
    </div>
  )
}

export default CartElement
