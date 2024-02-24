import { SET_FINAL_PRICE } from "./finalPriceType";

const initialState = {
  finalPrice: 0,
};

const finalPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FINAL_PRICE:
      return {
        ...state,
        finalPrice: state.finalPrice + action.payload,
      };

    default:
      return state;
  }
};

export default finalPriceReducer;
