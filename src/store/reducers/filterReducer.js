import { SET_PRICE_RANGE_FILTER } from "../actions/actionTypes";
import { FilterOptions } from "../../config/appConfig";

const initialState = {
  priceRange: FilterOptions[0].range
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRICE_RANGE_FILTER:
      return { ...state, priceRange: action.payload };
    default:
      return state;
  }
};
