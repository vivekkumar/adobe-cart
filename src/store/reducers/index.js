import { combineReducers } from "redux";

import shoppingList from "./shoppingListReducer";
import cart from "./cartReducer";
import search from "./searchReducer";

export default combineReducers({
  shoppingList,
  cart,
  searchQuery: search
});
