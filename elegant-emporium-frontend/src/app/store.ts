// src/app/store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    product: productReducer,
    // Add other reducers as needed
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
