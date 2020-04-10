import { ADD_ITEM_TO_CART } from "./actionTypes";

export function addToCart(item) {
  return dispatch => {
    dispatch({ type: ADD_ITEM_TO_CART, payload: item });
  };
}
