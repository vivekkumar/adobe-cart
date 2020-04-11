import { SET_SORT } from "../actions/actionTypes";
import { SortOptions } from "../../config/appConfig";

export default (state = SortOptions[0], action) => {
  switch (action.type) {
    case SET_SORT:
      return action.payload;
    default:
      return state;
  }
};
