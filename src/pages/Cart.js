import React from 'react'
import CartElement from '../components/CartElement'

const Cart = (prop) => {
    const { value } = prop

    // console.log(value)
    const { CartItems } = value

    // console.log(Array.isArray(CartItems))
    // const ItemsCopy = Cart

    console.log(0 && 'chirag')

    const Items = CartItems.map((element, index) =>{
        return <CartElement value={element} key={index} />
    })

    return (
    <div style={{
        color: 'black'
    }}>
        {Items}
    </div>
    )
}

export default Cart