import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType"

export const addToCart = (payload) => {
    return{
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (valueId) => {
    return{
        type: REMOVE_FROM_CART,
        payload: valueId
    }
}
