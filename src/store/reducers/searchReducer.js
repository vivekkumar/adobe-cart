import { SET_SEARCH_QUERY } from "../actions/actionTypes";

export default (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};
