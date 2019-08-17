import KikayiApiService from "../services/api";
import * as ActionType from "./types";

import { startLoading, stopLoading } from "./index";

export const loadCategory = () => async (dispatch, getState) => {
  startLoading(dispatch);

  var categoryState = { ...getState().categoryState };
  console.log('current state', categoryState);
  const options = { url: "/categories", method: "get" };
  var res = await KikayiApiService.request(options);
  console.log('api response', res);
  categoryState.categories = res.data;
  dispatch({ type: ActionType.CATEGORY_LOADED, state: categoryState });
  stopLoading(dispatch);
};

export const addCategory = () => (dispatch, getState) => {
  var categoryState = { ...getState().categoryState };
  categoryState.category = {};
  dispatch({ type: ActionType.CATEGORY_ADD, state: categoryState });
};

export const editCategory = id => (dispatch, getState) => {
  var categoryState = { ...getState().categoryState };
  categoryState.category = categoryState.categories.find(i => i.id === id); 
  dispatch({ type: ActionType.CATEGORY_EDIT, state: categoryState });
};

export const saveCategory = category => async (dispatch, getState) => {
  startLoading(dispatch);

  const options = category.id
    ? { url: `/categories/${category.id}`, method: "put" }
    : { url: `/categories`, method: "post" };
  options.data = category;
  var res = await KikayiApiService.request(options);
  console.log('api response', res);
  let categoryState = { ...getState().categoryState };
  categoryState.categories = [res.data, ...categoryState.categories.filter(i => i.id !== category.id)];;
  categoryState.category = {};
  dispatch({ type: ActionType.CATEGORY_SAVED, state: categoryState });

  stopLoading(dispatch);
};

export const deleteCategory = id => async (dispatch, getState) => {
  startLoading(dispatch);

  const options = { url: `/categories/${id}`, method: "delete" };
  var res = await KikayiApiService.request(options);

  let categoryState = { ...getState().categoryState };
  categoryState.categories = [...categoryState.categories.filter(i => i.id !== id)];
  categoryState.category = {};
  dispatch({ type: ActionType.CATEGORY_DELETED, state: categoryState });
  
  stopLoading(dispatch);
};