import React from 'react'
import CartElement from '../components/CartElement'
import { removeFromCart } from '../redux'
import { connect } from 'react-redux'

const Cart = (prop) => {
    const { value, cartItems } = prop
    const { CartItems, setCartItems } = value

    const Items = cartItems.map((element, index) => {
        return <CartElement setItemsNumber={removeFromCart} setCartItems={setCartItems} CartItems={CartItems}  value={element} key={index} />
    })


    return (
        <div>
            {   Items.length === 0 ? 
                <div>
                    <h2>Sorry Cart is Empty</h2>
                </div>
                :
                <div className='cart-page-items' style={{
                    color: 'black'
                }}>
                    {Items}
                    {   prop.finalPrice === 0 ? "" : 
                        <div className='finalPrice'>
                            Total Amount : {prop.finalPrice} RS/-
                        </div>
                    }
                </div> 
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cartItems: state.cart.cartItems,
        finalPrice: state.finalPrice.finalPrice,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: () => dispatch(removeFromCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)