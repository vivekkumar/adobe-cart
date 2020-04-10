import { get } from "../fetchService";

export const fetchShoppingList = () => {
  return get("https://api.jsonbin.io/b/5e8c3a45af7c476bc47e477d");
};
