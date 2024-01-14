import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()

    return (
    <div>
        <h1>Cart Page</h1>
        <button onClick={() => navigate('/order-summary', {replace: true})}>Place order</button>
    </div>
    )
}

export default Cart