import KikayiApiService from "../services/api";
import * as ActionType from "./types";

import { startLoading, stopLoading } from "./index";

export const loadvendor = () => async (dispatch, getState) => {
  startLoading(dispatch);

  var vendorState = { ...getState().vendorState };
  console.log('current state', vendorState);
  const options = { url: "/vendors", method: "get" };
  var res = await KikayiApiService.request(options);
  console.log('api response', res);
  vendorState.vendors = res.data;
  dispatch({ type: ActionType.VENDOR_LOADED, state: vendorState });
  stopLoading(dispatch);
};

export const addvendor = () => (dispatch, getState) => {
  var vendorState = { ...getState().vendorState };
  vendorState.vendor = {};
  dispatch({ type: ActionType.VENDOR_ADD, state: vendorState });
};

export const editvendor = id => (dispatch, getState) => {
  var vendorState = { ...getState().vendorState };
  vendorState.vendor = vendorState.vendors.find(i => i.id === id); 
  dispatch({ type: ActionType.VENDOR_EDIT, state: vendorState });
};

export const savevendor = vendor => async (dispatch, getState) => {
  startLoading(dispatch);

  const options = vendor.id
    ? { url: `/vendors/${vendor.id}`, method: "put" }
    : { url: `/vendors`, method: "post" };
  options.data = vendor;
  var res = await KikayiApiService.request(options);
  console.log('api response', res);
  let vendorState = { ...getState().vendorState };
  vendorState.vendors = [res.data, ...vendorState.vendors.filter(i => i.id !== vendor.id)];;
  vendorState.vendor = {};
  dispatch({ type: ActionType.VENDOR_SAVED, state: vendorState });

  stopLoading(dispatch);
};

export const deletevendor = id => async (dispatch, getState) => {
  startLoading(dispatch);

  const options = { url: `/vendors/${id}`, method: "delete" };
  var res = await KikayiApiService.request(options);

  let vendorState = { ...getState().vendorState };
  vendorState.vendors = [...vendorState.vendors.filter(i => i.id !== id)];
  vendorState.vendor = {};
  dispatch({ type: ActionType.VENDOR_DELETED, state: vendorState });
  
  stopLoading(dispatch);
};