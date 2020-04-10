import { combineReducers } from "redux";

import shoppingList from "./shoppingListReducer";
import cart from "./cartReducer";

export default combineReducers({
  shoppingList,
  cart
});
