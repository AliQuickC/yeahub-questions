import { configureStore } from '@reduxjs/toolkit/react';
import { rootReducer } from './appReducer';
import { useDispatch } from 'react-redux';
import baseApi from './baseApi';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
