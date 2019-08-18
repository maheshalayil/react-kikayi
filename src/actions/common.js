import { LOADING_START, LOADING_STOP, HIDE_SIDEBAR } from './types';

export const startLoading = (dispatch) => dispatch({type:LOADING_START});
export const stopLoading = (dispatch) => dispatch({type:LOADING_STOP});
export const hideSideBar = () => (dispatch) => dispatch({type:HIDE_SIDEBAR});