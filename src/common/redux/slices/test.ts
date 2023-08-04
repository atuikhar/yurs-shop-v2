import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: {
      message: '',
    },
  },
  reducers: {
    testDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { testDetails } = testSlice.actions;

export default testSlice.reducer;
