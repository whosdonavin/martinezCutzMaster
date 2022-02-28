import { createSlice } from "@reduxjs/toolkit";

const startingValue = {
  section: "invisible",
  custInfoSection: "",
  createdAppointmentSection: "invisible",
  firstName: "",
  lastName: "",
  service: "",
  addon: "",
  date: "",
  time: "",
  phone: "",
  email: "",
};

export const summarySlice = createSlice({
  name: "summarySection",
  initialState: { value: startingValue },
  reducers: {
    updateSummarySection: (state, action) => {
      state.value.section = action.payload;
    },
    updateCustInfoSection: (state, action) => {
      state.value.custInfoSection = action.payload;
    },
    updateCreatedAppointmentSection: (state, action) => {
      state.value.createdAppointmentSection = action.payload;
    },
    updateFirstName: (state, action) => {
      state.value.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.value.lastName = action.payload;
    },
    updateService: (state, action) => {
      state.value.service = action.payload;
    },
    updateAddon: (state, action) => {
      state.value.addon = action.payload;
    },
    updateDate: (state, action) => {
      state.value.date = action.payload;
    },
    updateTime: (state, action) => {
      state.value.time = action.payload;
    },
    updatePhone: (state, action) => {
      state.value.phone = action.payload;
    },
    updateEmail: (state, action) => {
      state.value.email = action.payload;
    },
  },
});
export const { updateSummarySection } = summarySlice.actions;
export const { updateCustInfoSection } = summarySlice.actions;
export const { updateCreatedAppointmentSection } = summarySlice.actions;
export const { updateFirstName } = summarySlice.actions;
export const { updateLastName } = summarySlice.actions;
export const { updateService } = summarySlice.actions;
export const { updateAddon } = summarySlice.actions;
export const { updateDate } = summarySlice.actions;
export const { updateTime } = summarySlice.actions;
export const { updatePhone } = summarySlice.actions;
export const { updateEmail } = summarySlice.actions;
export default summarySlice.reducer;
