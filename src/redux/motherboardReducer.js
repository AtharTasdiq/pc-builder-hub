import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedComponent: null,
};

const motherboardSlice = createSlice({
  name: 'motherboard',
  initialState,
  reducers: {
    addComponent: (state, action) => {
        state.selectedComponent = action.payload;
    },
    // Add other actions like removeComponent, clearComponents, etc. if needed.
  },
});

export const { addComponent } = motherboardSlice.actions;
export default motherboardSlice.reducer;