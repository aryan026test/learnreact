import { SET_FINAL_PRICE } from "./finalPriceType";

export const setFinalPrice = (payload) => {
  return {
    type: SET_FINAL_PRICE,
    payload
  };
};
