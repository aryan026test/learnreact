import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType"

const initialState = {
    itemsNumber: 0,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: return{
            ...state,
            itemsNumber: state.itemsNumber + 1,
            cartItems: [...state.cartItems, action.payload],
        }

        case REMOVE_FROM_CART: return{
            ...state,
            itemsNumber: state.itemsNumber - 1,
            cartItems: state.cartItems.filter(item => item.id !== action.payload),
        }

        default: return state
    }
}

export default cartReducer