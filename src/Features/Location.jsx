import { createSlice } from "@reduxjs/toolkit";

const startingValue = { onBookingPage: false };

export const locationSlice = createSlice({
  name: "location",
  initialState: { value: startingValue },
  reducers: {
    isOnBookingPage: (state, action) => {
      state.value.onBookingPage = action.payload;
    },
  },
});

export const { isOnBookingPage } = locationSlice.actions;

export default locationSlice.reducer;
