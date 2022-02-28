import { useDispatch } from "react-redux";
import { isOnBookingPage } from "../../Features/Location";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../../Images/FinalLogo.svg";

const HomeContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${image});
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;
const BookingLink = styled(Link)`
  color: black;
  background: red;
  border-radius: 5px;
  margin-left: 1.5rem;
  padding: 5px 15px;

  &:hover {
    background: black;
    color: #bc9355;
  }
`;

const Home = () => {
  const dispatch = useDispatch();

  function setOnBooking() {
    dispatch(isOnBookingPage(true));
  }

  return (
    <HomeContainer>
      <BookingLink to="/scheduleAppointment" onClick={setOnBooking}>
        Book Now
      </BookingLink>
    </HomeContainer>
  );
};

export default Home;
