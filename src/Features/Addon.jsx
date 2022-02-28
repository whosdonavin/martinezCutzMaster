import { createSlice } from "@reduxjs/toolkit";

const startingValue = {
  addonItem: "",
  isSelected: false,
  section: "invisible",
  container: "enabled",
  backButton: "enabled",
  nextButton: "disabled",
  buttonSection: "visible",
};

export const addonSlice = createSlice({
  name: "addonSection",
  initialState: { value: startingValue },
  reducers: {
    modifiyAddonSection: (state, action) => {
      state.value.section = action.payload;
    },
    modifiyAddonContainer: (state, action) => {
      state.value.container = action.payload;
    },
    modifiyAddonIsSelected: (state, action) => {
      state.value.isSelected = action.payload;
    },
    modifiyAddonSelectedItem: (state, action) => {
      state.value.addonItem = action.payload;
    },
    modifiyAddonButtonSection: (state, action) => {
      state.value.buttonSection = action.payload;
    },
    modifiyAddonNextButton: (state, action) => {
      state.value.nextButton = action.payload;
    },
  },
});

export const { modifiyAddonSection } = addonSlice.actions;
export const { modifiyAddonContainer } = addonSlice.actions;
export const { modifiyAddonIsSelected } = addonSlice.actions;
export const { modifiyAddonSelectedItem } = addonSlice.actions;
export const { modifiyAddonButtonSection } = addonSlice.actions;
export const { modifiyAddonNextButton } = addonSlice.actions;

export default addonSlice.reducer;
