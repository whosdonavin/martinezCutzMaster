import { createSlice } from "@reduxjs/toolkit";

const startingValue = {
  section: "invisible",
  container: "enabled",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  validFirst: false,
  validLast: false,
  validEmail: false,
  validPhone: false,
  buttonSection: "visible",
  backButton: "enabled",
  nextButton: "disabled",
};

export const customerSlice = createSlice({
  name: "appointmentSection",
  initialState: { value: startingValue },
  reducers: {
    modifiyCustomerSection: (state, action) => {
      state.value.section = action.payload;
    },
    modifiyCustomerContainer: (state, action) => {
      state.value.container = action.payload;
    },
    modifiyCustomerFirstName: (state, action) => {
      state.value.firstName = action.payload;
    },
    modifiyCustomerLastName: (state, action) => {
      state.value.lastName = action.payload;
    },
    modifiyCustomerPhone: (state, action) => {
      state.value.phone = action.payload;
    },
    modifiyCustomerEmail: (state, action) => {
      state.value.email = action.payload;
    },
    modifiyValidFirst: (state, action) => {
      state.value.validFirst = action.payload;
    },
    modifiyValidLast: (state, action) => {
      state.value.validLast = action.payload;
    },
    modifiyValidEmail: (state, action) => {
      state.value.validEmail = action.payload;
    },
    modifiyValidPhone: (state, action) => {
      state.value.validPhone = action.payload;
    },
    modifiyCustomerButtonSection: (state, action) => {
      state.value.buttonSection = action.payload;
    },
    modifiyCustomerNextButton: (state, action) => {
      state.value.nextButton = action.payload;
    },
  },
});

export const { modifiyCustomerSection } = customerSlice.actions;
export const { modifiyCustomerContainer } = customerSlice.actions;
export const { modifiyCustomerFirstName } = customerSlice.actions;
export const { modifiyCustomerLastName } = customerSlice.actions;
export const { modifiyCustomerPhone } = customerSlice.actions;
export const { modifiyCustomerEmail } = customerSlice.actions;
export const { modifiyValidFirst } = customerSlice.actions;
export const { modifiyValidLast } = customerSlice.actions;
export const { modifiyValidEmail } = customerSlice.actions;
export const { modifiyValidPhone } = customerSlice.actions;
export const { modifiyCustomerButtonSection } = customerSlice.actions;
export const { modifiyCustomerNextButton } = customerSlice.actions;

export default customerSlice.reducer;
