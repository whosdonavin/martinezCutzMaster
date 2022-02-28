import { useSelector } from "react-redux";
import styled from "styled-components";
import { IPadPro } from "../../Responsive";
import Image from "../../Images/Pinstripe.svg";
import SelectAppointment from "../BookingElements/SelectAppointment";
import SelectAddon from "../BookingElements/SelectAddon";
import SelectDate from "../BookingElements/SelectDate";
import SelectTime from "../BookingElements/SelectTime";
import CustomerInformation from "../BookingElements/CustomerInformation";
import AppointmentSummary from "../BookingElements/AppointmentSummary";
const ParentSection = styled.section``;
const AppointmentPageContent = styled.section`
  width: 70%;
  margin: 0 auto;
  ${IPadPro({ width: "100%" })}
`;
const PageTitle = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 5rem;
  ${IPadPro({ "margin-bottom": "2.5rem" })}
`;
const Title = styled.h1`
  font-size: 1.5rem;
`;
const Pinstripe = styled.img`
  width: 100%;
`;
const AppointmentPage = () => {
  const parent = useSelector((state) => state.parent.value);
  const { section } = parent;
  return (
    <AppointmentPageContent>
      <ParentSection id={section}>
        <PageTitle>
          <Title>Schedule Appointment</Title>
          <Pinstripe src={Image} />
        </PageTitle>
        <SelectAppointment />
        <SelectAddon />
        <SelectDate />
        <SelectTime />
        <CustomerInformation />
      </ParentSection>
      <AppointmentSummary />
    </AppointmentPageContent>
  );
};

export default AppointmentPage;
