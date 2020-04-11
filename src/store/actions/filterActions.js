import { SET_PRICE_RANGE_FILTER } from "./actionTypes";

export const setPriceRangeFilter = range => {
  return dispatch => {
    dispatch({ type: SET_PRICE_RANGE_FILTER, payload: range });
  };
};
