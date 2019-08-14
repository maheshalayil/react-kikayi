import { createStore, combineReducers } from 'redux';
import * as Reducers from './reducers';

const cr = combineReducers({
  categoryState : Reducers.categoryReducer
})
export const makeStore = () => createStore(cr);