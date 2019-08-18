import { LOADING_START, LOADING_STOP, HIDE_SIDEBAR } from "../../actions/types";

const initialState = {
  showSidebar: true,
  progress: false
};
export const commonReducer = (state = initialState, action) => {
  if (action.type === LOADING_START) return { ...state, progress: true };
  if (action.type === LOADING_STOP) return { ...state, progress: false };
  if (action.type === HIDE_SIDEBAR) return { ...state, showSidebar: false };
  return state;
};
