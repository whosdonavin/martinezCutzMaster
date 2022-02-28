import { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import Image from "../Images/Pinstripe.svg";
import axios from "axios";

const PageTitle = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;
`;
const Title = styled.h1`
  font-size: 2rem;
`;
const Pinstripe = styled.img`
  width: 100%;
`;
const ServiceItems = styled.div`
  display: flex;
  grid-gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5%;
`;
const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 125px;
  min-width: 675px;
  max-width: 675px;
  border-radius: 5px;
  border: 1px solid #bc9355;
  ${mobile({ "min-width": 0, "min-height": 0 })}
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #bc9355;
  margin-bottom: 10px;
  border-bottom: 1px solid red;
`;
const Bottom = styled.div`
  width: 100%;
  text-align: start;
  text-transform: capitalize;
`;
const ServiceName = styled.span``;
const ServicePrice = styled.span``;
const ServiceDescription = styled.span``;
const ServicesSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    // "http://martinezcutz.com/api/services"

    axios
      .get("https://martinezcutzmaster.herokuapp.com/api/services")
      .then((res) => {
        setServices(res.data);
      });
  }, []);

  return (
    <>
      <PageTitle>
        <Title>Services</Title>
        <Pinstripe src={Image} />
      </PageTitle>
      <ServiceItems>
        {services.map((service) => {
          return (
            <Service key={service.id}>
              <Top>
                <ServiceName>{service.serviceName}</ServiceName>
                <ServicePrice>{service.servicePrice}</ServicePrice>
              </Top>
              <Bottom>
                <ServiceDescription>
                  {service.serviceDescription}
                </ServiceDescription>
              </Bottom>
            </Service>
          );
        })}
      </ServiceItems>
    </>
  );
};

export default ServicesSection;
