import { get } from "../fetchService";
import { ShoppingAPI } from "../../config/appConfig";

export const fetchShoppingList = () => {
  return get(ShoppingAPI);
};
