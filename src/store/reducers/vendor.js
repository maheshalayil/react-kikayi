import * as ActionType from "../../actions/types";
const initialState = {
  vendors: [],
  vendor: {}
};
export const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.VENDOR_LOADED:
    case ActionType.VENDOR_ADD:
    case ActionType.VENDOR_EDIT:
    case ActionType.VENDOR_SAVED:
    case ActionType.VENDOR_DELETED:
      return action.state;
    default:
      return state;
  }
};
