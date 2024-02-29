import { TOGGLE_VIEW_TO_GRID, TOGGLE_VIEW_TO_LIST } from "./viewType"

const initialState = {
    view: 'list'
}

const viewReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_VIEW_TO_GRID: return{
            view: 'grid'
        }
        case TOGGLE_VIEW_TO_LIST: return{
            view: 'list'
        }

        default: return state
    }
}

export default viewReducer