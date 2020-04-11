import { combineReducers } from "redux";

import shoppingList from "./shoppingListReducer";
import cart from "./cartReducer";
import search from "./searchReducer";
import sort from "./sortReducer";
import filter from "./filterReducer";

export default combineReducers({
  shoppingList,
  cart,
  searchQuery: search,
  sort,
  filter
});
