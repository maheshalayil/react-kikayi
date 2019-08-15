import KikayiApiService from "../services/api";
import { CATEGORY_LOADED } from "./types";
import { startLoading, stopLoading } from "./index";

export const loadCategory = () => async dispatch => {
  startLoading(dispatch);
  const options = { url: "/categories", method: "get" };
  //var res = await KikayiApiService.request(options);
  dispatch({ type: CATEGORY_LOADED, payload: [{ id: 1, name: "123" }] });
  stopLoading(dispatch);
};
