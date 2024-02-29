import { SET_PAGE_ITEMS } from "./itemsType"

const initialState = {
    pageItems: {}
}

const itemsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PAGE_ITEMS: return{
            ...state,
            pageItems: action.payload
        }
    
    default: return state
    }
}

export default itemsReducer