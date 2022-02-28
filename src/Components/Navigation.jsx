import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import MobileNavigation from "./MobileNavigation";
import { NavLink } from "react-router-dom";
import { mobile } from "../Responsive";
import { isOnBookingPage } from "../Features/Location";
const Nav = styled.nav`
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  max-width: 1800px;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

const Left = styled.div``;
const Right = styled.div``;
const Logo = styled(NavLink)`
  font-size: 3rem;
  color: white;
  font-family: "Pirata One";
  &:hover {
    color: #bc9355;
  }
`;
const NavLinks = styled.ul`
  ${mobile({ display: "none" })}
  display: flex;
  align-items: center;
`;
const Link = styled(NavLink)`
  color: white;
  margin: 0 1rem;
  font-size: 1rem;
  &:hover {
    color: #bc9355;
  }
`;
const BookingLink = styled(NavLink)`
  color: black;
  background: red;
  border-radius: 5px;
  margin-left: 1.5rem;
  padding: 5px 15px;
  ${mobile({ "margin-left": 0 })}
  &:hover {
    background: #bc9355;
  }
`;
const Navigation = () => {
  const location = useSelector((state) => state.location.value);
  const { onBookingPage } = location;
  const dispatch = useDispatch();

  function setOnBooking() {
    dispatch(isOnBookingPage(true));
  }
  function resetState() {
    if (onBookingPage === true) {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }
  return (
    <Nav>
      <Left>
        <Logo id="home" to="/" onClick={resetState}>
          Martinez Cutz
        </Logo>
      </Left>
      <Right>
        <NavLinks>
          <Link to="/" onClick={resetState}>
            Home
          </Link>
          <Link to="/services" onClick={resetState}>
            Services
          </Link>
          <Link to="/gallery" onClick={resetState}>
            Gallery
          </Link>
          <Link to="/contact" onClick={resetState}>
            Contact
          </Link>
          <BookingLink to="/scheduleAppointment" onClick={setOnBooking}>
            Book Now
          </BookingLink>
        </NavLinks>
        <MobileNavigation />
      </Right>
    </Nav>
  );
};

export default Navigation;
