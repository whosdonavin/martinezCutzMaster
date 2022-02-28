import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import Image from "../../Images/Pinstripe.svg";
import { updateParentSection } from "../../Features/Parent";
import {
  updateSummarySection,
  updateCustInfoSection,
  updateCreatedAppointmentSection,
} from "../../Features/Summary";
const Summary = styled.section``;

const PageTitle = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2rem;
`;
const Title = styled.h1`
  font-size: 1.75rem;
`;
const Pinstripe = styled.img`
  width: 100%;
`;
const CustInfoSection = styled.section``;
const CustomerInfo = styled.div`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Label = styled.label``;
const Input = styled.input`
  background: transparent;
  border: none;
  color: #bc9355;
  text-align: center;
  font-family: "Eczar";
  font-size: 1.25rem;
  text-transform: capitalize;
  width: 50%;
  ${mobile({ width: "100%" })}
`;
const EmailInput = styled.input`
  background: transparent;
  border: none;
  color: #bc9355;
  text-align: center;
  font-family: "Eczar";
  font-size: 1.25rem;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Addon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Phone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Email = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonSection = styled.div`
  margin: 0 auto;
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
const Submit = styled.button`
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

const AppointmentCreated = styled.section`
  text-align: center;
  font-size: 2rem;
`;
const AppointmentCreatedMessage = styled.p``;
const BackHome = styled.button`
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
const AppointmentSummary = () => {
  const summaryState = useSelector((state) => state.summary.value);
  const {
    section,
    custInfoSection,
    createdAppointmentSection,
    firstName,
    lastName,
    service,
    addon,
    date,
    time,
    phone,
    email,
  } = summaryState;
  const clientState = useSelector((state) => state.client.value);
  const {
    selectedAppointment,
    selectedAddon,
    selectedDate,
    selectedTime,
    clientFirst,
    clientLast,
    clientPhone,
    clientEmail,
    status,
  } = clientState;
  const dispatch = useDispatch();

  // Appointment Created
  const [appointmentMessage, setAppointmentMessage] = useState("");
  // preview
  function goHome() {
    let homeBtn = document.getElementById("home");
    homeBtn.click();
    window.location.reload();
  }
  // Back Button
  function revertSummarySection() {
    dispatch(updateParentSection("visible"));
    dispatch(updateSummarySection("invisible"));
  }
  // Next Button
  function createAppointment() {
    axios
      .post("https://martinezcutzmaster.herokuapp.com/api/appointments", {
        selectedAppointment: selectedAppointment,
        selectedAddons: selectedAddon,
        selectedDate: selectedDate,
        selectedTime: selectedTime,
        clientFirst: clientFirst,
        clientLast: clientLast,
        clientPhone: clientPhone,
        clientEmail: clientEmail,
        status: status,
      })
      .then((response) => {
        console.log(response.data);

        // set response date to local use state.
        setAppointmentMessage(response.data);
        // hide cust info section
        dispatch(updateCustInfoSection("invisible"));
        // display new message section
        dispatch(updateCreatedAppointmentSection("visible"));
      });
  }
  return (
    <Summary id={section}>
      <PageTitle>
        <Title>Appointment Summary</Title>
        <Pinstripe src={Image} />
      </PageTitle>
      <CustInfoSection id={custInfoSection}>
        <CustomerInfo>
          <Name>
            <Label>Name</Label>
            <Input disabled={true} value={`${firstName} ${lastName}`} />
          </Name>
          <Date>
            <Label>Date</Label>
            <Input disabled={true} value={date} />
          </Date>
          <Service>
            <Label>Service</Label>
            <Input disabled={true} value={service} />
          </Service>
          <Addon>
            <Label>Addon</Label>
            <Input disabled={true} value={addon} />
          </Addon>
          <Time>
            <Label>Time</Label>
            <Input disabled={true} value={time} />
          </Time>
          <Phone>
            <Label>Phone Number</Label>
            <Input disabled={true} value={phone} />
          </Phone>
          <Email>
            <Label>Email</Label>
            <EmailInput className="capitalize" disabled={true} value={email} />
          </Email>
        </CustomerInfo>
        <ButtonSection>
          <Back onClick={revertSummarySection}>Cancel</Back>
          <Submit onClick={createAppointment}>Submit</Submit>
        </ButtonSection>
      </CustInfoSection>
      <AppointmentCreated id={createdAppointmentSection}>
        <AppointmentCreatedMessage>
          {appointmentMessage}
        </AppointmentCreatedMessage>
        <BackHome onClick={goHome}>Back Home</BackHome>
      </AppointmentCreated>
    </Summary>
  );
};

export default AppointmentSummary;
