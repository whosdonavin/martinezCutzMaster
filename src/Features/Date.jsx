import { createSlice } from "@reduxjs/toolkit";

const startingValue = {
  section: "invisible",
  container: "enabled",
  selectedDate: "",
  buttonSection: "visible",
  backButton: "enabled",
  nextButton: "disabled",
  initFormattedDate: "",
};

export const dateSlice = createSlice({
  name: "dateSection",
  initialState: { value: startingValue },
  reducers: {
    modifiyDateSection: (state, action) => {
      state.value.section = action.payload;
    },
    modifiyDateContainer: (state, action) => {
      state.value.container = action.payload;
    },
    modifiyDateSelectedItem: (state, action) => {
      state.value.selectedDate = action.payload;
    },
    modifiyDateButtonSection: (state, action) => {
      state.value.buttonSection = action.payload;
    },
    modifiyDateNextButton: (state, action) => {
      state.value.nextButton = action.payload;
    },
    modifiyInitFormattedDate: (state, action) => {
      state.value.initFormattedDate = action.payload;
    },
  },
});

export const { modifiyDateSection } = dateSlice.actions;
export const { modifiyDateContainer } = dateSlice.actions;
export const { modifiyDateSelectedItem } = dateSlice.actions;
export const { modifiyDateButtonSection } = dateSlice.actions;
export const { modifiyDateNextButton } = dateSlice.actions;
export const { modifiyInitFormattedDate } = dateSlice.actions;

export default dateSlice.reducer;
