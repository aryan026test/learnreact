import { TOGGLE_VIEW_TO_GRID, TOGGLE_VIEW_TO_LIST } from "./viewType"

export const gridView = () => {
    return{
        type: TOGGLE_VIEW_TO_GRID
    }
}

export const listView = () => {
    return{
        type: TOGGLE_VIEW_TO_LIST
    }
}