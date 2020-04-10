import { fetchShoppingList } from "../../slayer/shoppingList";
import {
  SHOPPING_LIST_FETCHING,
  SHOPPING_LIST_SUCCESS,
  SHOPPING_LIST_FAILURE
} from "./actionTypes";

const handleSuccess = (dispatch, r) => {
  console.log("success", r);
  dispatch({ type: SHOPPING_LIST_FETCHING, payload: false });
  dispatch({ type: SHOPPING_LIST_SUCCESS, payload: r.items });
};

const handleFailure = (dispatch, e) => {
  console.log("error", e);
  dispatch({ type: SHOPPING_LIST_FETCHING, payload: false });
  dispatch({ type: SHOPPING_LIST_FAILURE, payload: e });
};

export const getShoppingList = () => {
  return dispatch => {
    dispatch({ type: SHOPPING_LIST_FETCHING, payload: true });

    fetchShoppingList()
      .then(r => {
        if (r.message) {
          handleFailure(dispatch, r.message);
        } else {
          handleSuccess(dispatch, r);
        }
      })
      .catch(e => {
        handleFailure(dispatch, e.message);
      });
  };
};
