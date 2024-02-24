import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./addToCart/cartReducer";
import viewReducer from "./view/viewReducer";
import itemsReducer from "./pageItems/itemsReducer";
import finalPriceReducer from "./finalPrice/finalPriceReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    view: viewReducer,
    items: itemsReducer,
    finalPrice: finalPriceReducer,
})

export default rootReducer