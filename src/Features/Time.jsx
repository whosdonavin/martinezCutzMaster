import { createSlice } from "@reduxjs/toolkit";

const startingValue = {
  section: "invisible",
  container: "enabled",
  morning: "invisible",
  evening: "visible",
  isTimeSelected: false,
  selectedTime: "",
  buttonSection: "visible",
  backButton: "enabled",
  nextButton: "disabled",
};

export const timeSlice = createSlice({
  name: "timeSection",
  initialState: { value: startingValue },
  reducers: {
    modifiyTimeSection: (state, action) => {
      state.value.section = action.payload;
    },
    modifiyTimeContainer: (state, action) => {
      state.value.container = action.payload;
    },
    modifiyMorningContainer: (state, action) => {
      state.value.morning = action.payload;
    },
    modifiyEveningContainer: (state, action) => {
      state.value.evening = action.payload;
    },
    modifiyIsTimeSelected: (state, action) => {
      state.value.isTimeSelected = action.payload;
    },
    modifiyTimeSelected: (state, action) => {
      state.value.selectedTime = action.payload;
    },
    modifiyTimeButtonSection: (state, action) => {
      state.value.buttonSection = action.payload;
    },
    modifiyTimeNextButton: (state, action) => {
      state.value.nextButton = action.payload;
    },
  },
});

export const { modifiyTimeSection } = timeSlice.actions;
export const { modifiyTimeContainer } = timeSlice.actions;
export const { modifiyMorningContainer } = timeSlice.actions;
export const { modifiyEveningContainer } = timeSlice.actions;
export const { modifiyIsTimeSelected } = timeSlice.actions;
export const { modifiyTimeSelected } = timeSlice.actions;
export const { modifiyTimeButtonSection } = timeSlice.actions;
export const { modifiyTimeNextButton } = timeSlice.actions;

export default timeSlice.reducer;
