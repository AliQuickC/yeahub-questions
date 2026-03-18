import { bindActionCreators } from '@reduxjs/toolkit/react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as questionsActions } from '../entities/questions/model/questionsSlice';

const rootActions = {
  ...questionsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
