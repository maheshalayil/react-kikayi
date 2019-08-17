import KikayiApiService from "../services/api";
import * as ActionType from "./types";

import { startLoading, stopLoading } from "./index";

export const loadProducts = () => async (dispatch, getState) => {
  startLoading(dispatch);

  var productState = { ...getState().productState };
  console.log('inside product action', productState);
  const options = { url: "/products", method: "get" };
  var res = await KikayiApiService.request(options);
  console.log('api response', res);
  productState.products = res.data;
  dispatch({ type: ActionType.PRODUCT_LOADED, state: productState });
  stopLoading(dispatch);
};

export const addProduct = () => (dispatch, getState) => {
  var productState = { ...getState().productState };
  productState.product = {};
  dispatch({ type: ActionType.PRODUCT_ADD, state: productState });
};

export const editProduct = id => (dispatch, getState) => {
  var productState = { ...getState().productState };
  productState.product = productState.products.find(i => i.id === id); 
  dispatch({ type: ActionType.PRODUCT_EDIT, state: productState });
};

export const saveProduct = product => async (dispatch, getState) => {
  startLoading(dispatch);

  const options = product.id
    ? { url: `/products/${product.id}`, method: "put" }
    : { url: `/products`, method: "post" };
  options.data = product;
  var res = await KikayiApiService.request(options);
  console.log('api response', res);
  let productState = { ...getState().productState };
  productState.products = [res.data, ...productState.products.filter(i => i.id !== product.id)];;
  productState.product = {};
  dispatch({ type: ActionType.PRODUCT_SAVED, state: productState });

  stopLoading(dispatch);
};

export const deleteProduct = id => async (dispatch, getState) => {
  startLoading(dispatch);

  const options = { url: `/products/${id}`, method: "delete" };
  var res = await KikayiApiService.request(options);

  let productState = { ...getState().productState };
  productState.products = [...productState.products.filter(i => i.id !== id)];
  productState.product = {};
  dispatch({ type: ActionType.PRODUCT_DELETED, state: productState });
  
  stopLoading(dispatch);
};