import * as ActionTypes from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return [...state, action.payload];
    case ActionTypes.REMOVE_ITEM_TO_CART:
      return state;
    default:
      return state;
  }
};
