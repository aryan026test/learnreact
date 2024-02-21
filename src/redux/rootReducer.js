import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./addToCart/cartReducer";
import viewReducer from "./view/viewReducer";
import itemsReducer from "./pageItems/itemsReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    view: viewReducer,
    items: itemsReducer
})

export default rootReducer