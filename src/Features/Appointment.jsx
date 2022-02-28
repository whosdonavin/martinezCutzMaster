import { createSlice } from "@reduxjs/toolkit";

const startingValue = {
  isSelected: false,
  section: "visible",
  appointmentItem: "",
  container: "enabled",
  backButton: "enabled",
  nextButton: "disabled",
  buttonSection: "visible",
};

export const appointmentSlice = createSlice({
  name: "appointmentSection",
  initialState: { value: startingValue },
  reducers: {
    modifiyAppointmentSection: (state, action) => {
      state.value.section = action.payload;
    },
    modifiyAppointmentContainer: (state, action) => {
      state.value.container = action.payload;
    },
    modifiyAppointmentIsSelected: (state, action) => {
      state.value.isSelected = action.payload;
    },
    modifiyAppointmentSelectedItem: (state, action) => {
      state.value.appointmentItem = action.payload;
    },
    modifiyAppointmentButtonSection: (state, action) => {
      state.value.buttonSection = action.payload;
    },
    modifiyAppointmentNextButton: (state, action) => {
      state.value.nextButton = action.payload;
    },
  },
});

export const { modifiyAppointmentSection } = appointmentSlice.actions;
export const { modifiyAppointmentContainer } = appointmentSlice.actions;
export const { modifiyAppointmentIsSelected } = appointmentSlice.actions;
export const { modifiyAppointmentSelectedItem } = appointmentSlice.actions;
export const { modifiyAppointmentButtonSection } = appointmentSlice.actions;
export const { modifiyAppointmentNextButton } = appointmentSlice.actions;

export default appointmentSlice.reducer;
