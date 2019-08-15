import { CATEGORY_LOADED } from '../../actions/types';
const initialState = {
  categories: [],
  category: {}
}
export const categoryReducer = (state = initialState, action) => {
  if(action.type === CATEGORY_LOADED)
    return {...state, categories:action.payload}
    
  return state;
}