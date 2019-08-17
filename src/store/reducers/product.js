import * as ActionType from "../../actions/types";
const initialState = {
  products: [],
  product: {}
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PRODUCT_LOADED:
    case ActionType.PRODUCT_ADD:
    case ActionType.PRODUCT_EDIT:
    case ActionType.PRODUCT_SAVED:
    case ActionType.PRODUCT_DELETED:
      return action.state;
    default:
      return state;
  }
};
