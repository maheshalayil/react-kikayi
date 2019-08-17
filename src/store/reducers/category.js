import * as ActionType from "../../actions/types";
const initialState = {
  categories: [],
  category: {}
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CATEGORY_LOADED:
    case ActionType.CATEGORY_ADD:
    case ActionType.CATEGORY_EDIT:
    case ActionType.CATEGORY_SAVED:
    case ActionType.CATEGORY_DELETED:
      return action.state;
    default:
      return state;
  }
};
