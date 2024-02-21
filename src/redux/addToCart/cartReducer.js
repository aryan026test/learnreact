import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType"

const initialState = {
    itemsNumber: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: return{
            itemsNumber: state.itemsNumber + 1
        }

        case REMOVE_FROM_CART: return{
            itemsNumber: state.itemsNumber - 1
        }

        default: return state
    }
}

export default cartReducer