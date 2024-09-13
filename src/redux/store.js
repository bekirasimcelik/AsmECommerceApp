// src/redux/store.js

import {configureStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducers';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import orderReducer from './reducers/orderReducer';
import {composeWithDevTools} from '@redux-devtools/extension';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  user: userReducer,
  order: orderReducer,
});

const middleware = [thunk];

const store = configureStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
