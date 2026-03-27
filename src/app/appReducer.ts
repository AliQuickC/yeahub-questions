import { combineReducers } from '@reduxjs/toolkit/react';
import { questionsApi } from '../entities/questions/api/questionsApi';
import questionsSlice from '../entities/questions/model/questionsSlice';

export const rootReducer = combineReducers({
  filters: questionsSlice,
  [questionsApi.reducerPath]: questionsApi.reducer,
});
