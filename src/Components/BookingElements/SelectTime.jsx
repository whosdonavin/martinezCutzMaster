import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import {
  modifiyTimeSection,
  modifiyTimeContainer,
  modifiyIsTimeSelected,
  modifiyTimeSelected,
  modifiyTimeButtonSection,
  modifiyTimeNextButton,
} from "../../Features/Time";
import { updateTime } from "../../Features/Summary";
import {
  modifiyDateContainer,
  modifiyDateButtonSection,
} from "../../Features/Date";
import { modifiyCustomerSection } from "../../Features/Customer";
import { attachTime } from "../../Features/ClientData";

const TimeSlots = styled.div`
  margin-bottom: 5%;
`;
const Container = styled.div``;

const SectionTitle = styled.h1`
  margin-bottom: 3rem;
  border-bottom: 2px solid #bc9355;
  width: fit-content;
  font-size: 1.5rem;
`;
const SlotSectionTitle = styled.h3`
  margin-bottom: 2rem;
`;
const SlotGroup = styled.div`
  margin: 3rem 0;
`;
const TimeItems = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  ${mobile({ width: "100%" })}
`;
const TimeSlot = styled.div`
  ${mobile({ width: "100%" })}
  &:hover {
    border-radius: 5px;
    box-shadow: -5px 2px 10px 0px #bc9355;
    ${mobile({ "box-shadow": "none" })}
  }
`;
const Label = styled.label`
  display: flex;
  color: white;
  min-width: 200px;
  padding: 10px 15px;
  position: relative;
  border-radius: 5px;
  border: 2px solid #bc9355;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;
const Input = styled.input`
  left: -100vw;
  position: absolute;
  &:checked + ${Label} {
    box-shadow: -5px 2px 10px 0px #bc9355;
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

const SelectTime = () => {
  // Global State
  const timeState = useSelector((state) => state.time.value);
  const {
    section,
    container,
    isTimeSelected,
    selectedTime,
    morning,
    evening,
    buttonSection,
    nextButton,
  } = timeState;
  const dispatch = useDispatch();
  // Local State
  const [morningItems, setMorningItems] = useState([]);
  const [afternoonItems, setAfternoonItems] = useState([]);
  const [eveningItems, setEveningItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://martinezcutzmaster.herokuapp.com/api/morningTimeSlots")
      .then((res) => {
        setMorningItems(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://martinezcutzmaster.herokuapp.com/api/afternoonTimeSlots")
      .then((res) => {
        setAfternoonItems(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://martinezcutzmaster.herokuapp.com/api/eveningTimeSlots")
      .then((res) => {
        setEveningItems(res.data);
      });
  }, []);
  // Enable
  function enableNextButton() {
    dispatch(modifiyTimeNextButton("enabled"));
  }
  function enableTimeContainer() {
    dispatch(modifiyTimeContainer("enabled"));
  }

  // Disable
  function disableNextButton() {
    dispatch(modifiyTimeNextButton("disabled"));
  }
  function disableTimeContainer() {
    dispatch(modifiyTimeContainer("disabled"));
  }
  // Reset
  function resetInvisbleTimeSlots() {
    let mts = document.getElementById("morningTimeSlotItems");
    let ats = document.getElementById("afternoonTimeSlotItems");
    let ets = document.getElementById("eveningTimeSlotItems");

    let mtsc = Array.from(mts.children);
    let atsc = Array.from(ats.children);
    let etsc = Array.from(ets.children);

    mtsc.forEach((time) => {
      if (time.id === "invisible") {
        time.id = "";
      }
    });
    atsc.forEach((time) => {
      if (time.id === "invisible") {
        time.id = "";
      }
    });
    etsc.forEach((time) => {
      if (time.id === "invisible") {
        time.id = "";
      }
    });
  }
  // State Changes
  function setSelectedTime(item) {
    dispatch(modifiyIsTimeSelected(true));
    dispatch(modifiyTimeSelected(item));
    dispatch(updateTime(item));
    dispatch(attachTime(item));
    disableTimeContainer();
    enableNextButton();
  }

  function removeSelectedTime(item) {
    item.checked = false;
    dispatch(modifiyIsTimeSelected(false));
    dispatch(modifiyTimeSelected(""));
    dispatch(updateTime(""));
    dispatch(attachTime(""));
    enableTimeContainer();
    disableNextButton();
  }

  function selectItem(e) {
    let itemClicked = e.target.previousSibling;
    itemClicked.checked = true;
    setSelectedTime(itemClicked.id);
  }

  // Back Button
  function revertTimeSection() {
    let item = document.getElementById(`${selectedTime}`);
    if (isTimeSelected === true) {
      removeSelectedTime(item);
    } else {
      dispatch(modifiyTimeSection("invisible"));
      dispatch(modifiyDateContainer("enabled"));
      dispatch(modifiyDateButtonSection("visible"));
      resetInvisbleTimeSlots();
    }
  }
  // Next Button
  function displayCustomerInfo() {
    dispatch(modifiyTimeButtonSection("invisible"));
    dispatch(modifiyCustomerSection("visible"));
  }
  return (
    <TimeSlots id={section}>
      <Container className={container}>
        <SectionTitle>Select Appointment Time</SectionTitle>
        <SlotGroup id={morning}>
          <SlotSectionTitle>Morning</SlotSectionTitle>
          <TimeItems id="morningTimeSlotItems">
            {morningItems.map((slot) => {
              return (
                <TimeSlot key={slot.id}>
                  <Input
                    type="checkbox"
                    id={slot.slotTime}
                    value={slot.slotTime}
                    className=""
                  />
                  <Label
                    hrmlFor={slot.slotTime}
                    onClick={selectItem}
                    className=""
                  >
                    {slot.slotTime}
                  </Label>
                </TimeSlot>
              );
            })}
          </TimeItems>
        </SlotGroup>
        <SlotGroup>
          <SlotSectionTitle>Afternoon</SlotSectionTitle>
          <TimeItems id="afternoonTimeSlotItems">
            {afternoonItems.map((slot) => {
              return (
                <TimeSlot key={slot.id}>
                  <Input
                    type="checkbox"
                    id={slot.slotTime}
                    value={slot.slotTime}
                    className=""
                  />
                  <Label
                    hrmlFor={slot.slotTime}
                    onClick={selectItem}
                    className=""
                  >
                    {slot.slotTime}
                  </Label>
                </TimeSlot>
              );
            })}
          </TimeItems>
        </SlotGroup>
        <SlotGroup id={evening}>
          <SlotSectionTitle>Evening</SlotSectionTitle>
          <TimeItems id="eveningTimeSlotItems">
            {eveningItems.map((slot) => {
              return (
                <TimeSlot key={slot.id}>
                  <Input
                    type="checkbox"
                    id={slot.slotTime}
                    value={slot.slotTime}
                    className=""
                  />
                  <Label
                    hrmlFor={slot.slotTime}
                    onClick={selectItem}
                    className=""
                  >
                    {slot.slotTime}
                  </Label>
                </TimeSlot>
              );
            })}
          </TimeItems>
        </SlotGroup>
      </Container>
      <ButtonSection id={buttonSection}>
        <Back onClick={revertTimeSection}>Back</Back>
        <Next onClick={displayCustomerInfo} className={nextButton}>
          Next
        </Next>
      </ButtonSection>
    </TimeSlots>
  );
};

export default SelectTime;
