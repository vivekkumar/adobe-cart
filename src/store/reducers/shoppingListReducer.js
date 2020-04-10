import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOPPING_LIST_SUCCESS:
      return { ...state, items: action.payload, error: null };
    case ActionTypes.SHOPPING_LIST_FAILURE:
      return { ...state, items: [], error: action.payload };
    case ActionTypes.SHOPPING_LIST_FETCHING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
