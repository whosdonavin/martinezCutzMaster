import { createSlice } from "@reduxjs/toolkit";

const startingValue = {
  clientLast: "",
  clientPhone: "",
  clientEmail: "",
  clientFirst: "",
  selectedTime: "",
  selectedDate: "",
  status: "pending",
  selectedAddon: "",
  selectedAppointment: "",
};

export const clientSlice = createSlice({
  name: "appointmentSection",
  initialState: { value: startingValue },
  reducers: {
    attachAppointment: (state, action) => {
      state.value.selectedAppointment = action.payload;
    },
    attachAddon: (state, action) => {
      state.value.selectedAddon = action.payload;
    },
    attachDate: (state, action) => {
      state.value.selectedDate = action.payload;
    },
    attachTime: (state, action) => {
      state.value.selectedTime = action.payload;
    },
    attachFirstName: (state, action) => {
      state.value.clientFirst = action.payload;
    },
    attachLastName: (state, action) => {
      state.value.clientLast = action.payload;
    },
    attachPhone: (state, action) => {
      state.value.clientPhone = action.payload;
    },
    attachEmail: (state, action) => {
      state.value.clientEmail = action.payload;
    },
    attachStatus: (state, action) => {
      state.value.status = action.payload;
    },
  },
});

export const { attachAppointment } = clientSlice.actions;
export const { attachAddon } = clientSlice.actions;
export const { attachDate } = clientSlice.actions;
export const { attachTime } = clientSlice.actions;
export const { attachFirstName } = clientSlice.actions;
export const { attachLastName } = clientSlice.actions;
export const { attachPhone } = clientSlice.actions;
export const { attachEmail } = clientSlice.actions;
export const { attachStatus } = clientSlice.actions;

export default clientSlice.reducer;
