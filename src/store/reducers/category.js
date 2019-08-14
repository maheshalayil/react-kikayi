const initialState = {
  categories: []
}
export const categoryReducer = (state = initialState, action) => {
  if(action.type === 1)
    return {...state, categories:[1]}
    
  return state;
}