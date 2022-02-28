import React from "react";
import Layout from "./Layout";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import dateReducer from "./Features/Date";
import timeReducer from "./Features/Time";
import addonReducer from "./Features/Addon";
import parentReducer from "./Features/Parent";
import summaryReducer from "./Features/Summary";
import contactReducer from "./Features/Contact";
import locationReducer from "./Features/Location";
import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Features/Customer";
import clientReducer from "./Features/ClientData";
import appointmentReducer from "./Features/Appointment";

const store = configureStore({
  reducer: {
    date: dateReducer,
    time: timeReducer,
    addon: addonReducer,
    client: clientReducer,
    parent: parentReducer,
    contact: contactReducer,
    summary: summaryReducer,
    customer: customerReducer,
    location: locationReducer,
    appointment: appointmentReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById("MartinezCutz")
);
