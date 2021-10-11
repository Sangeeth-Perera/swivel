import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import Cart from './CartSlice';
import Items from './ItemsSlice';


const createReducer = () =>
  combineReducers({
    cart: Cart,
    items: Items
  });

export const store = configureStore({
  reducer: createReducer(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;