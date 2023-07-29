import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedComponent: null,
};

const cpuSlice = createSlice({
  name: 'cpu',
  initialState,
  reducers: {
    addComponent: (state, action) => {
        state.selectedComponent = action.payload;
    },
    // Add other actions like removeComponent, clearComponents, etc. if needed.
  },
});

export const { addComponent } = cpuSlice.actions;
export default cpuSlice.reducer;