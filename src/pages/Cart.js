import React, { useState } from 'react'
import CartElement from '../components/CartElement'
import { removeFromCart } from '../redux'
import { connect } from 'react-redux'

const Cart = (prop) => {
    const { value } = prop
    const { CartItems, setCartItems, setItemsNumber } = value
    const [finalPrice, setFinalPrice] = useState(0)

    const Items = CartItems.map((element, index) => {
        return <CartElement setItemsNumber={removeFromCart} setCartItems={setCartItems} CartItems={CartItems} setFinalPrice={setFinalPrice} value={element} key={index} />
    })

    return (
        <div>
            {   Items.length === 0 ? 
                <div>
                    <h2>Sorry Cart is Empty</h2>
                </div>
                :
                <div style={{
                    color: 'black'
                }}>
                    {Items}
                    {   finalPrice === 0 ? "" : 
                        <div className='finalPrice'>
                            Total Amount : {finalPrice} RS/-
                        </div>
                    }
                </div> 
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: () => dispatch(removeFromCart())
    }
}

export default connect(null, mapDispatchToProps)(Cart)