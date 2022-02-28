import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundPage = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Message = styled.p`
  font-size: 1.5rem;
`;
const Home = styled(Link)`
  color: #bc9355;
  &:hover {
    border-bottom: 1px solid #bc9355;
  }
`;

const NotFound = () => {
  return (
    <NotFoundPage>
      <Message>
        Look's like you are lost. Click <Home to="/">here</Home> to get back
        home.
      </Message>
    </NotFoundPage>
  );
};

export default NotFound;
