import styled from "styled-components";
import { useState, useEffect } from "react";
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
const AddonItems = styled.div`
  display: flex;
  grid-gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5%;
`;
const Addon = styled.div`
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
  &:last-child {
    display: none;
  }
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
const AddonName = styled.span``;
const AddonPrice = styled.span``;
const AddonDescription = styled.span``;

const AddonsSection = () => {
  const [addons, setAddons] = useState([]);

  useEffect(() => {
    // "http://martinezcutz.com/api/addons"

    axios
      .get("https://martinezcutzmaster.herokuapp.com/api/addons")
      .then((res) => {
        setAddons(res.data);
      });
  }, []);
  return (
    <>
      <PageTitle>
        <Title>Addons</Title>
        <Pinstripe src={Image} />
      </PageTitle>
      <AddonItems>
        {addons.map((addon) => {
          return (
            <Addon key={addon.id}>
              <Top>
                <AddonName>{addon.addonName}</AddonName>
                <AddonPrice>{addon.addonPrice}</AddonPrice>
              </Top>
              <Bottom>
                <AddonDescription>{addon.addonDescription}</AddonDescription>
              </Bottom>
            </Addon>
          );
        })}
      </AddonItems>
    </>
  );
};

export default AddonsSection;
