import { SET_SORT } from "./actionTypes";

export const setSortOption = sortOption => {
  return dispatch => {
    dispatch({ type: SET_SORT, payload: sortOption });
  };
};
