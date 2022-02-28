import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import {
  modifiyDateSection,
  modifiyDateContainer,
  modifiyDateSelectedItem,
  modifiyDateButtonSection,
  modifiyDateNextButton,
  modifiyInitFormattedDate,
} from "../../Features/Date";

import {
  modifiyAddonContainer,
  modifiyAddonIsSelected,
  modifiyAddonButtonSection,
  modifiyAddonNextButton,
} from "../../Features/Addon";

import { updateAddon, updateDate } from "../../Features/Summary";

import {
  modifiyTimeSection,
  modifiyMorningContainer,
  modifiyEveningContainer,
} from "../../Features/Time";
import { attachDate } from "../../Features/ClientData";
const DateSection = styled.div`
  text-align: center;
  margin-bottom: 5%;
`;
const Container = styled.div``;

const SectionTitle = styled.h1`
  margin-bottom: 3rem;
  border-bottom: 2px solid #bc9355;
  width: fit-content;
  font-size: 1.5rem;
`;
const Input = styled(Flatpickr)`
  color: white;
  font-family: "Eczar";
  font-size: 1rem;
  width: 100%;
  padding: 0.75rem;
  background: black;
  color: white;
  border-radius: 5px;
  border: 2px solid #bc9355;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const ButtonSection = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  width: 40%;
  ${mobile({ width: "100%" })}
`;
const Back = styled.button`
  color: white;
  font-family: "Eczar";
  font-size: 1rem;
  background: black;
  border-radius: 5px;
  border: 1px solid #bc9355;
  width: 50%;
  padding: 0.5rem 1.75rem;
  &:hover {
    background: #bc9355;
    color: black;
    cursor: pointer;
  }
`;
const Next = styled.button`
  color: white;
  font-family: "Eczar";
  font-size: 1rem;
  background: black;
  border-radius: 5px;
  border: 1px solid #bc9355;
  width: 50%;
  padding: 0.5rem 1.75rem;
  &:hover {
    background: #bc9355;
    color: black;
    cursor: pointer;
  }
`;
const options = {
  dateFormat: "F j Y",
  minDate: "today",
  altInput: true,
  altFormat: "m/j/Y",
  disableMobile: "true",
  disable: [
    function (date) {
      return date.getDay() === 0 || date.getDay() === 1;
    },
  ],
};

const SelectDate = () => {
  // Golbal State
  const dateState = useSelector((state) => state.date.value);
  const { section, container, buttonSection, nextButton, initFormattedDate } =
    dateState;

  const addonState = useSelector((state) => state.addon.value);
  const { addonItem } = addonState;

  const dispatch = useDispatch();

  // State Changes
  function formatSelectedDate(date) {
    const regex = /\//g;
    const initDateValue = new Date(date);
    let formattedDate = initDateValue.toLocaleDateString("en-US");
    dispatch(modifiyInitFormattedDate(formattedDate));

    // send formatted date to db
    let dashedDate = formattedDate.replace(regex, "-");
    let splitDashedDate = dashedDate.split("-");
    let formattedDbDate = `${splitDashedDate[2]}-${splitDashedDate[0]}-${splitDashedDate[1]}`;
    dispatch(attachDate(formattedDbDate));
  }

  // runs when the input value changes
  function setSelectedDate() {
    const dateInput = document.getElementById("dateInput");
    let dateInputValue = dateInput.value;

    dispatch(modifiyDateSelectedItem(dateInputValue));
    dispatch(updateDate(dateInputValue));
    dispatch(modifiyDateNextButton("enabled"));
    formatSelectedDate(dateInputValue);
  }

  function removeSelectedDate(item) {
    item.checked = false;
    dispatch(modifiyInitFormattedDate(""));
    dispatch(modifiyDateSection("invisible"));
    dispatch(modifiyAddonIsSelected(false));
    dispatch(modifiyAddonContainer("enabled"));
    dispatch(modifiyAddonButtonSection("visible"));
    dispatch(modifiyAddonNextButton("disabled"));
    dispatch(updateAddon(""));
  }

  // runs when next button is clicked
  function checkTimeSlotsTaken() {
    axios
      .get("https://martinezcutzmaster.herokuapp.com/api/appointments")
      .then((res) => {
        const appointments = res.data;
        const takenAppointmentTimes = [];

        appointments.forEach((appointment) => {
          let appointmentDate = appointment.selectedDate;
          let splitDate = appointmentDate
            .split("T")[0]
            .replace(/\b0/g, "")
            .replace(/\b-/g, "/");
          let convertedAppointmentDate = new Date(splitDate).toLocaleDateString(
            "en-US"
          );

          if (initFormattedDate === convertedAppointmentDate) {
            takenAppointmentTimes.push(`${appointment.selectedTime}`);
          } else {
            return;
          }
        });

        takenAppointmentTimes.forEach((timeSlot) => {
          let item = document.getElementById(`${timeSlot}`);
          item.parentElement.id = "invisible";
        });
      });
  }
  // runs when next button is clicked
  function filterTimeSlotsDisplayed() {
    let dayChosen = new Date(initFormattedDate);
    let dayChosenIndex = dayChosen.getUTCDay();

    if (dayChosenIndex === 6) {
      let twoPM = document.getElementById("2PM");
      let threePM = document.getElementById("3PM");
      let fourPM = document.getElementById("4PM");
      dispatch(modifiyMorningContainer("visible"));
      dispatch(modifiyEveningContainer("invisible"));
      twoPM.parentElement.id = "invisible";
      threePM.parentElement.id = "invisible";
      fourPM.parentElement.id = "invisible";
    } else {
      let twelvePM = document.getElementById("12PM");
      let onePM = document.getElementById("1PM");
      dispatch(modifiyMorningContainer("invisible"));
      dispatch(modifiyEveningContainer("visible"));
      onePM.parentElement.id = "invisible";
      twelvePM.parentElement.id = "invisible";
    }
  }

  // Back Button
  function revertDateSection() {
    let item = document.getElementById(`${addonItem}`);
    removeSelectedDate(item);
  }
  // Next Button
  function showTimeSection() {
    dispatch(modifiyDateButtonSection("invisible"));
    dispatch(modifiyDateContainer("disabled"));
    dispatch(modifiyTimeSection("visible"));
    filterTimeSlotsDisplayed();
    checkTimeSlotsTaken();
  }

  return (
    <DateSection id={section}>
      <Container className={container}>
        <SectionTitle>Select Appointment Date</SectionTitle>
        <Input
          id="dateInput"
          placeholder="Select A Date"
          options={options}
          onChange={setSelectedDate}
        />
        <ButtonSection id={buttonSection}>
          <Back onClick={revertDateSection}>Back</Back>
          <Next onClick={showTimeSection} className={nextButton}>
            Next
          </Next>
        </ButtonSection>
      </Container>
    </DateSection>
  );
};

export default SelectDate;
