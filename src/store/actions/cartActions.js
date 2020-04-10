import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM_GROUP_FROM_CART
} from "./actionTypes";

export function addToCart(item) {
  return dispatch => {
    dispatch({ type: ADD_ITEM_TO_CART, payload: item });
  };
}

export function removeFromCart(item, deleteAll = false) {
  return dispatch => {
    if (!deleteAll) {
      dispatch({ type: REMOVE_ITEM_FROM_CART, payload: item });
    } else {
      dispatch({ type: REMOVE_ITEM_GROUP_FROM_CART, payload: item });
    }
  };
}
