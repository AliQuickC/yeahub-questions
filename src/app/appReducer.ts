import { combineReducers } from '@reduxjs/toolkit/react';
import { questionsApi } from '../entities/questions/api/questionsApi';
import { specializationsApi } from '../entities/specializations/api/specializationsApi';
import { skillsApi } from '../entities/skills/api/skillsApi';
import { detailedAnswerApi } from '../entities/detailed-answer/api/detailedAnswerApi';

export const rootReducer = combineReducers({
  [questionsApi.reducerPath]: questionsApi.reducer,
  [specializationsApi.reducerPath]: specializationsApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
  [detailedAnswerApi.reducerPath]: detailedAnswerApi.reducer,
});
