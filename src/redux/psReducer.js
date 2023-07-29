import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedComponent: null,
};

const psSlice = createSlice({
  name: 'ps',
  initialState,
  reducers: {
    addComponent: (state, action) => {
        state.selectedComponent = action.payload;
    },
    // Add other actions like removeComponent, clearComponents, etc. if needed.
  },
});

export const { addComponent } = psSlice.actions;
export default psSlice.reducer;