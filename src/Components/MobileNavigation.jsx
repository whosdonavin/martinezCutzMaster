import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { isOnBookingPage } from "../Features/Location";

const Navigation = styled.nav`
  width: 100%;
  height: 100%;
`;
const MobileIcon = styled(FaBars)`
  ${mobile({ display: "flex" })}
  color: white;
  font-size: 2rem;
  display: none;
`;
const Close = styled(FaTimes)`
  ${mobile({ display: "flex" })}
  color: white;
  font-size: 2rem;
  display: none;
`;
const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background: black;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1.75rem;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 80%;
  margin: 0 auto;
  height: 75%;
`;
const MenuItem = styled(Link)`
  font-size: 1.5rem;
  color: white;
`;
const BookingLink = styled(Link)`
  color: black;
  background: red;
  border-radius: 5px;
  margin-left: 1.5rem;
  padding: 5px 15px;
  width: fit-content;
  ${mobile({ "margin-left": 0 })}
  &:hover {
    background: #bc9355;
  }
`;
const MobileNavigation = () => {
  const [menuStatus, setMenuStatus] = useState("hide");
  function openMenu() {
    setMenuStatus("show");
  }
  function closeMenu() {
    setMenuStatus("hide");
  }

  const location = useSelector((state) => state.location.value);
  const { onBookingPage } = location;
  const dispatch = useDispatch();

  function setOnBooking() {
    dispatch(isOnBookingPage(true));
    closeMenu();
  }
  function resetState() {
    closeMenu();
    if (onBookingPage === true) {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }
  return (
    <>
      <Navigation className={menuStatus}>
        <Menu>
          <Top>
            <Close onClick={closeMenu} />
          </Top>
          <Bottom>
            <MenuItem to="/" onClick={resetState}>
              Home
            </MenuItem>
            <MenuItem to="/services" onClick={resetState}>
              Services
            </MenuItem>
            <MenuItem to="/gallery" onClick={resetState}>
              Gallery
            </MenuItem>
            <MenuItem to="/contact" onClick={resetState}>
              Contact
            </MenuItem>
            <BookingLink to="/scheduleAppointment" onClick={setOnBooking}>
              Book Now
            </BookingLink>
          </Bottom>
        </Menu>
      </Navigation>
      <MobileIcon onClick={openMenu} />
    </>
  );
};

export default MobileNavigation;
