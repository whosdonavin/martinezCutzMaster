import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { mobile } from "../../Responsive";
import {
  modifiyAddonSection,
  modifiyAddonContainer,
  modifiyAddonIsSelected,
  modifiyAddonSelectedItem,
  modifiyAddonButtonSection,
  modifiyAddonNextButton,
} from "../../Features/Addon";
import {
  modifiyAppointmentContainer,
  modifiyAppointmentSelectedItem,
  modifiyAppointmentIsSelected,
  modifiyAppointmentButtonSection,
  modifiyAppointmentNextButton,
} from "../../Features/Appointment";
import { updateService, updateAddon } from "../../Features/Summary";
import { modifiyDateSection } from "../../Features/Date";
import { attachAddon } from "../../Features/ClientData";

const Addons = styled.div`
  margin-bottom: 5%;
`;
const Container = styled.div``;
const SectionTitle = styled.h1`
  margin-bottom: 3rem;
  border-bottom: 2px solid #bc9355;
  width: fit-content;
  font-size: 1.5rem;
`;
const AddonItems = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  ${mobile({ width: "100%" })}
`;

const Addon = styled.div`
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
  min-width: 275px;
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
const Price = styled.span`
  color: #bc9355;
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
const SelectAddon = () => {
  // Get Addons From Server
  const [addons, setAddons] = useState([]);
  useEffect(() => {
    axios
      .get("https://martinezcutzmaster.herokuapp.com/api/addons")
      .then((res) => {
        setAddons(res.data);
      });
  }, []);
  // State Management
  const addonState = useSelector((state) => state.addon.value);
  const {
    section,
    container,
    isSelected,
    addonItem,
    buttonSection,
    nextButton,
  } = addonState;
  const appointmentState = useSelector((state) => state.appointment.value);
  const { appointmentItem } = appointmentState;
  const dispatch = useDispatch();

  // Enable
  function enableNextButton() {
    dispatch(modifiyAddonNextButton("enabled"));
  }
  function enableAddonConatiner() {
    dispatch(modifiyAddonContainer("enabled"));
  }
  // Disable

  function removeAddonSection() {
    let previousSectionItem = document.getElementById(`${appointmentItem}`);
    dispatch(modifiyAddonSection("invisible"));
    dispatch(modifiyAppointmentSelectedItem(""));
    dispatch(updateService(""));
    dispatch(modifiyAppointmentIsSelected(false));
    dispatch(modifiyAppointmentButtonSection("enable"));
    dispatch(modifiyAppointmentContainer("enable"));
    dispatch(modifiyAppointmentNextButton("disabled"));
    previousSectionItem.checked = false;
  }
  function disableAddonConatiner() {
    dispatch(modifiyAddonContainer("disabled"));
  }
  function disableNextButton() {
    dispatch(modifiyAddonNextButton("disabled"));
  }
  // State Changes

  function setSelectedItem(item) {
    let selectedAddon = document.getElementById(`${item}`);
    dispatch(modifiyAddonIsSelected(true));
    dispatch(modifiyAddonSelectedItem(item));
    dispatch(updateAddon(selectedAddon.name));
    dispatch(attachAddon(selectedAddon.name));
    disableAddonConatiner();
    enableNextButton();
  }

  function removeSelectedItem(item) {
    item.checked = false;
    dispatch(modifiyAddonIsSelected(false));
    dispatch(modifiyAddonSelectedItem(""));
    dispatch(attachAddon(""));
    dispatch(updateAddon(""));
    enableAddonConatiner();
    disableNextButton();
  }

  // Back Button Logic
  function revertAddonSection() {
    let item = document.getElementById(`${addonItem}`);
    if (isSelected === false) {
      removeAddonSection();
    } else {
      removeSelectedItem(item);
    }
  }

  // Next Button Logic
  function displayDateSection() {
    dispatch(modifiyAddonButtonSection("invisible"));
    dispatch(modifiyDateSection("visible"));
  }
  // Execution
  function selectItem(e) {
    let itemClicked = e.target.previousSibling;
    itemClicked.checked = true;
    setSelectedItem(itemClicked.id);
  }
  return (
    <Addons id={section}>
      <Container className={container}>
        <SectionTitle id="addonTitle">Select Addon Type</SectionTitle>
        <AddonItems>
          {addons.map((addon) => {
            return (
              <Addon key={addon.id} onClick={selectItem}>
                <Input
                  type="checkbox"
                  id={addon.serviceId}
                  value={addon.serviceId}
                  name={addon.addonName}
                />
                <Label hrmlFor={addon.serviceId}>
                  {addon.addonName}
                  <Price>{addon.addonPrice}</Price>
                </Label>
              </Addon>
            );
          })}
        </AddonItems>
      </Container>
      <ButtonSection id={buttonSection}>
        <Back onClick={revertAddonSection}>Back</Back>
        <Next onClick={displayDateSection} className={nextButton}>
          Next
        </Next>
      </ButtonSection>
    </Addons>
  );
};

export default SelectAddon;
