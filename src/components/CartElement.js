import React, { useEffect } from 'react'

const CartElement = (prop) => {
  const { setItemsNumber, setCartItems, setFinalPrice, value } = prop
  // const IncreasePrice = () => {
  //   setFinalPrice((prev) => prev+value.price)
  // }
  useEffect(()=>{
    setFinalPrice((prev) => prev+value.price)
    // eslint-disable-next-line
  },[])

  const decreasePrice = (p) => {
    setFinalPrice((prev) => {
      return prev - p
    })
  }

  const handleEvents = () => {
    setItemsNumber((prev) => prev-1)
    decreasePrice(value.price)
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
