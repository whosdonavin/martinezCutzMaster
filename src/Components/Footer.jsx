import styled from "styled-components";
const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem;
`;
const FooterText = styled.p`
  color: white;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText> Martinez Cutz &copy; 2022 | All Rights Reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;
