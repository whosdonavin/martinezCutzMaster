import { createSlice } from "@reduxjs/toolkit";

const startingValue = { section: "visible" };

export const parentSlice = createSlice({
  name: "parentSection",
  initialState: { value: startingValue },
  reducers: {
    updateParentSection: (state, action) => {
      state.value.section = action.payload;
    },
  },
});

export const { updateParentSection } = parentSlice.actions;

export default parentSlice.reducer;
