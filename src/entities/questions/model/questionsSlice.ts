import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface State {
  filters: {
    searchTerm: string;
  };
}

const initialState: State = {
  filters: {
    searchTerm: '',
  },
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const actions = questionsSlice.actions;

export default questionsSlice.reducer;
