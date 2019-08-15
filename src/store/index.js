import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as Reducers from './reducers';
import thunk from 'redux-thunk';

const cr = combineReducers({
  categoryState : Reducers.categoryReducer,
  commonState : Reducers.commonReducer
})

export const makeStore = () => createStore(cr, applyMiddleware(thunk));