import React, { useEffect } from 'react'
import { removeFromCart, setFinalPrice } from '../redux'
import { connect } from 'react-redux'

const CartElement = (prop) => {
  const { setFinalPrice, value } = prop
  useEffect(()=>{
    setFinalPrice(value.price)
    // eslint-disable-next-line
  },[])

  const decreasePrice = (p) => {
    setFinalPrice(-p)
  }

  const handleEvents = () => {
    decreasePrice(value.price)
    prop.removeFromCart(value.id)
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

const mapStateToProps = (state) => {
  return{
    cartItems: state.cart.cartItems
  }
}

const mapDispatchToProp = (dispatch) => {
  return{
    removeFromCart: (valueId) => dispatch(removeFromCart(valueId)),
    setFinalPrice: (price) => dispatch(setFinalPrice(price))
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(CartElement)
