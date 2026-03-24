import { configureStore } from '@reduxjs/toolkit/react';
import { questionsApi } from '../entities/questions/api/questionsApi';
import { rootReducer } from './appReducer';
import { specializationsApi } from '../entities/specializations/api/specializationsApi';
import { skillsApi } from '../entities/skills/api/skillsApi';
import { detailedAnswerApi } from '../entities/detailed-answer/api/detailedAnswerApi';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      questionsApi.middleware,
      specializationsApi.middleware,
      skillsApi.middleware,
      detailedAnswerApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
