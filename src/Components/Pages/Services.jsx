import styled from "styled-components";
import ServicesSection from "../ServicesSection";
import AddonsSection from "../AddonsSection";

const ServicesPage = styled.section``;
const ServicesContent = styled.div``;
const AddonsContent = styled.div``;

const Services = () => {
  return (
    <ServicesPage>
      <ServicesContent>
        <ServicesSection />
      </ServicesContent>
      <AddonsContent>
        <AddonsSection />
      </AddonsContent>
    </ServicesPage>
  );
};

export default Services;
