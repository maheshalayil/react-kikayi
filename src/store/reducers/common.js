import { LOADING_START, LOADING_STOP } from "../../actions/types";

const initialState = {
  showSidebar: true,
  progress: false
};
export const commonReducer = (state = initialState, action) => {
  if (action.type === LOADING_START) return { ...state, progress: true };
  if (action.type === LOADING_STOP) return { ...state, progress: false };
  return state;
};
