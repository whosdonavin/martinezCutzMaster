import { createSlice } from "@reduxjs/toolkit";

const startingValue = {
  name: "",
  nameState: {
    isValid: false,
    message: "",
  },
  phone: "",
  phoneState: {
    isValid: false,
    message: "",
  },
  email: "",
  emailState: {
    isValid: false,
    message: "",
  },
  message: "",
  messageState: {
    isValid: false,
    message: "",
  },
};

export const addonSlice = createSlice({
  name: "contactPage",
  initialState: { value: startingValue },
  reducers: {
    setName: (state, action) => {
      state.value.name = action.payload;
    },
    setNameIsValid: (state, action) => {
      state.value.nameState.isValid = action.payload;
    },
    setNameMessage: (state, action) => {
      state.value.nameState.message = action.payload;
    },
    setPhone: (state, action) => {
      state.value.phone = action.payload;
    },
    setPhoneIsValid: (state, action) => {
      state.value.phoneState.isValid = action.payload;
    },
    setPhoneMessage: (state, action) => {
      state.value.phoneState.message = action.payload;
    },
    setEmail: (state, action) => {
      state.value.email = action.payload;
    },
    setEmailIsValid: (state, action) => {
      state.value.emailState.isValid = action.payload;
    },
    setEmailMessage: (state, action) => {
      state.value.emailState.message = action.payload;
    },
    setMessage: (state, action) => {
      state.value.message = action.payload;
    },
    setMessageIsValid: (state, action) => {
      state.value.messageState.isValid = action.payload;
    },
    setMessageMessage: (state, action) => {
      state.value.messageState.message = action.payload;
    },
  },
});

export const { setName } = addonSlice.actions;
export const { setNameIsValid } = addonSlice.actions;
export const { setNameMessage } = addonSlice.actions;
export const { setPhone } = addonSlice.actions;
export const { setPhoneIsValid } = addonSlice.actions;
export const { setPhoneMessage } = addonSlice.actions;
export const { setEmail } = addonSlice.actions;
export const { setEmailIsValid } = addonSlice.actions;
export const { setEmailMessage } = addonSlice.actions;
export const { setMessage } = addonSlice.actions;
export const { setMessageIsValid } = addonSlice.actions;
export const { setMessageMessage } = addonSlice.actions;

export default addonSlice.reducer;
