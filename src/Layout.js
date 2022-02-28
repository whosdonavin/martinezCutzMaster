import "./Layout.css";
import styled from "styled-components";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import Navigation from "./Components/Navigation";
import Gallery from "./Components/Pages/Gallery";
import Contact from "./Components/Pages/Contact";
import NotFound from "./Components/Pages/NotFound";
import Services from "./Components/Pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentPage from "./Components/Pages/AppointmentPage";

const Content = styled.div`
  padding: 2rem;
`;

// Entire Layout
function Layout() {
  return (
    <BrowserRouter>
      <Navigation />
      <Content>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/scheduleAppointment"
            element={<AppointmentPage />}
          ></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  );
}
export default Layout;
