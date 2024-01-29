import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../store/slices/todo";
import filterReducer from '../store/slices/filterSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    filters: filterReducer
  },
});