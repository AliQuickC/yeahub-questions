import { combineReducers } from '@reduxjs/toolkit/react';
import questionsSlice from '../entities/questions/model/questionsSlice';
import baseApi from './baseApi';

export const rootReducer = combineReducers({
  filters: questionsSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});
