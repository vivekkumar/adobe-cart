import * as ActionTypes from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return [...state, action.payload];
    case ActionTypes.REMOVE_ITEM_FROM_CART:
      let s = [...state];
      const itemIndex = s.findIndex(item => item.name === action.payload.name);
      s.splice(itemIndex, 1);
      return s;
    case ActionTypes.REMOVE_ITEM_GROUP_FROM_CART:
      return [...state].filter(item => item.name !== action.payload.name);
    default:
      return state;
  }
};
