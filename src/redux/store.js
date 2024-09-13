import {configureStore, combineReducers} from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducers';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  user: userReducer,
  order: orderReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
