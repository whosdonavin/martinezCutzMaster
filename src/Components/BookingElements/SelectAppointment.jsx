import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { mobile } from "../../Responsive";
import { useState, useEffect } from "react";
import {
  modifiyAppointmentContainer,
  modifiyAppointmentIsSelected,
  modifiyAppointmentSelectedItem,
  modifiyAppointmentButtonSection,
  modifiyAppointmentNextButton,
} from "../../Features/Appointment";

import { updateService } from "../../Features/Summary";
import { modifiyAddonSection } from "../../Features/Addon";
import { attachAppointment } from "../../Features/ClientData";
const Appointments = styled.div`
  margin-bottom: 5%;
  ${mobile({ "margin-bottom": "10%" })}
`;

const Container = styled.div``;

const SectionTitle = styled.h1`
  font-size: 1.5rem;
  width: fit-content;
  margin-bottom: 3rem;
  border-bottom: 2px solid #bc9355;
`;

const AppointmentItems = styled.div`
  gap: 2rem;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  ${mobile({ width: "100%" })}
`;

const Appointment = styled.div`
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
  min-width: 225px;
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
  pointer-events: none;
`;

const ButtonSection = styled.div`
  gap: 1rem;
  width: 40%;
  display: flex;
  margin-top: 2rem;
  ${mobile({ width: "100%" })}
`;

const Back = styled.button`
  width: 50%;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  background: black;
  font-family: "Eczar";
  padding: 0.5rem 1.75rem;
  border: 1px solid #bc9355;
  &:hover {
    color: black;
    cursor: pointer;
    background: #bc9355;
  }
`;

const Next = styled.button`
  width: 50%;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  background: black;
  font-family: "Eczar";
  padding: 0.5rem 1.75rem;
  border: 1px solid #bc9355;
  &:hover {
    background: #bc9355;
    color: black;
    cursor: pointer;
  }
`;

const SelectAppointment = () => {
  // Get Services From Server
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://martinezcutzmaster.herokuapp.com/api/services")
      .then((res) => {
        setServices(res.data);
      });
  }, []);

  // State Management
  const appointmentState = useSelector((state) => state.appointment.value);
  const { section, container, appointmentItem, buttonSection, nextButton } =
    appointmentState;
  const dispatch = useDispatch();

  // Enable Logic
  function enableNextButton() {
    dispatch(modifiyAppointmentNextButton("enabled"));
  }
  function enableAppointmentSection() {
    dispatch(modifiyAppointmentContainer("enable"));
  }

  // Disable Logic
  function disableNextButton() {
    dispatch(modifiyAppointmentNextButton("disabled"));
  }
  function disableAppointmentContainer() {
    dispatch(modifiyAppointmentContainer("disabled"));
  }

  // State Changes
  function setSelectedItem(item) {
    let selectedItem = document.getElementById(`${item}`);
    dispatch(modifiyAppointmentIsSelected(true));
    dispatch(modifiyAppointmentSelectedItem(item));
    dispatch(updateService(selectedItem.name));
    dispatch(attachAppointment(selectedItem.name));
    disableAppointmentContainer();
    enableNextButton();
  }
  function removeSelectedItem(item) {
    item.checked = false;
    dispatch(modifiyAppointmentIsSelected(false));
    dispatch(modifiyAppointmentSelectedItem(""));
    dispatch(updateService(""));
    dispatch(attachAppointment(""));
    enableAppointmentSection();
    disableNextButton();
  }

  // User Interface
  //
  //
  // Selecting An Item
  function selectItem(e) {
    let itemClicked = e.target.previousSibling;
    itemClicked.checked = true;
    setSelectedItem(itemClicked.id);
  }
  //
  //
  // Back Logic
  function revertAppointmentSection() {
    let item = document.getElementById(`${appointmentItem}`);
    if (appointmentItem === "") {
      window.location.reload();
    } else {
      removeSelectedItem(item);
    }
  }
  //
  //
  // Next Logic
  function displayAddonSection() {
    dispatch(modifiyAppointmentButtonSection("invisible"));
    dispatch(modifiyAddonSection("visible"));
  }

  return (
    <Appointments id={section}>
      <Container className={container}>
        <SectionTitle>Select Appointment Type</SectionTitle>
        <AppointmentItems>
          {services.map((service) => {
            return (
              <Appointment key={service.id} onClick={selectItem}>
                <Input
                  type="checkbox"
                  id={service.serviceId}
                  value={service.serviceId}
                  name={service.serviceName}
                />
                <Label hrmlFor={service.serviceId}>
                  {service.serviceName}
                  <Price>{service.servicePrice}</Price>
                </Label>
              </Appointment>
            );
          })}
        </AppointmentItems>
      </Container>
      <ButtonSection id={buttonSection}>
        <Back onClick={revertAppointmentSection}>Back</Back>
        <Next onClick={displayAddonSection} className={nextButton}>
          Next
        </Next>
      </ButtonSection>
    </Appointments>
  );
};

export default SelectAppointment;
