import { SET_PAGE_ITEMS } from "./itemsType"

export const setPageItems = (payload) => {
    return{
        type: SET_PAGE_ITEMS,
        payload
    }
}