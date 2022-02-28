import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import { updateParentSection } from "../../Features/Parent";
import { modifiyCustomerSection } from "../../Features/Customer";
import {
  modifiyTimeButtonSection,
  modifiyIsTimeSelected,
  modifiyTimeSelected,
  modifiyTimeContainer,
  modifiyTimeNextButton,
} from "../../Features/Time";

import {
  updateSummarySection,
  updateTime,
  updateFirstName,
  updateLastName,
  updatePhone,
  updateEmail,
} from "../../Features/Summary";

import {
  modifiyCustomerFirstName,
  modifiyCustomerLastName,
  modifiyCustomerPhone,
  modifiyCustomerEmail,
  modifiyValidFirst,
  modifiyValidLast,
  modifiyValidEmail,
  modifiyValidPhone,
  modifiyCustomerNextButton,
} from "../../Features/Customer";

import {
  attachFirstName,
  attachLastName,
  attachPhone,
  attachEmail,
} from "../../Features/ClientData";

const CustomerInfoContent = styled.div``;

const SectionTitle = styled.h1`
  margin-bottom: 3rem;
  border-bottom: 2px solid #bc9355;
  width: fit-content;
  font-size: 1.5rem;
`;
const Form = styled.form``;
const Label = styled.label`
  font-size: 1.25rem;
`;
const Input = styled.input`
  padding: 0 1rem;
  font-size: 1rem;
  font-family: "Eczar";
  color: white;
  background: black;
  border: none;
  text-transform: capitalize;
  border-bottom: 1px solid #bc9355;
  &:focus {
    outline: none;
  }
`;
const EmailInput = styled.input`
  padding: 0 1rem;
  font-size: 1rem;
  font-family: "Eczar";
  color: white;
  background: black;
  border: none;
  border-bottom: 1px solid #bc9355;
  &:focus {
    outline: none;
  }
`;
const Required = styled.span`
  color: red;
`;
const ErrorMessage = styled.span`
  color: red;
  padding: 0.5rem 0;
`;
const FirstName = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const LastName = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Email = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const ButtonSection = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  width: 40%;
  ${mobile({ width: "100%" })}
`;
const Back = styled.button`
  color: white;
  font-family: "Eczar";
  font-size: 1rem;
  background: black;
  border-radius: 5px;
  border: 1px solid #bc9355;
  width: 50%;
  padding: 0.5rem 1.75rem;
  &:hover {
    background: #bc9355;
    color: black;
    cursor: pointer;
  }
`;
const Review = styled.button`
  color: white;
  font-family: "Eczar";
  font-size: 1rem;
  background: black;
  border-radius: 5px;
  border: 1px solid #bc9355;
  width: 50%;
  padding: 0.5rem 1.75rem;
  &:hover {
    background: #bc9355;
    color: black;
    cursor: pointer;
  }
`;

const CustomerInformation = () => {
  const customerState = useSelector((state) => state.customer.value);
  const {
    firstName,
    lastName,
    phone,
    email,
    validFirst,
    validLast,
    validEmail,
    validPhone,
    section,
    nextButton,
  } = customerState;

  const timeState = useSelector((state) => state.time.value);
  const { selectedTime } = timeState;

  const dispatch = useDispatch();

  // Validation
  const patterns = {
    firstName: [/^[a-z]{1,15}$/i, "Invalid first name."],
    lastName: [/^[a-z]{1,15}$/i, "Invalid last name."],
    email: [
      /^[\w.-]{1,30}@[\w.]{2,30}\.[a-zA-Z]{2,4}$/,
      "Invalid email address.",
    ],
    phone: [/^\d{9}$/, "Phone number must 10 digits long."],
  };

  function validateFirstName() {
    let FN = document.getElementById("firstName");
    let regex = patterns.firstName[0];
    let message = patterns.firstName[1];
    let test = regex.test(firstName);

    if (test !== true) {
      dispatch(modifiyValidFirst(false));
      FN.innerText = message;
    } else {
      dispatch(modifiyValidFirst(true));
      FN.innerText = "";
    }
  }
  function validateLastName() {
    let LN = document.getElementById("lastName");
    let regex = patterns.lastName[0];
    let message = patterns.lastName[1];
    let test = regex.test(lastName);

    if (test !== true) {
      dispatch(modifiyValidLast(false));
      LN.innerText = message;
    } else {
      dispatch(modifiyValidLast(true));
      LN.innerText = "";
    }
  }
  function validateEmail() {
    let CE = document.getElementById("email");
    let regex = patterns.email[0];
    let message = patterns.email[1];
    let test = regex.test(email);

    if (test !== true) {
      dispatch(modifiyValidEmail(false));
      CE.innerText = message;
    } else {
      dispatch(modifiyValidEmail(true));
      CE.innerText = "";
    }
  }
  function validatePhone() {
    let CP = document.getElementById("phone");
    let regex = patterns.phone[0];
    let message = patterns.phone[1];
    let test = regex.test(phone);

    if (test !== true) {
      dispatch(modifiyValidPhone(false));
      CP.innerText = message;
    } else {
      dispatch(modifiyValidPhone(true));
      CP.innerText = "";
    }
  }
  function validateForm() {
    if (
      validFirst === false ||
      validLast === false ||
      validEmail === false ||
      validPhone === false
    ) {
      dispatch(modifiyCustomerNextButton("disabled"));
    } else {
      dispatch(modifiyCustomerNextButton("enabled"));
    }
  }

  // Set States

  function handleFirst() {
    let custFirst = document.getElementById("custFirst");
    dispatch(modifiyCustomerFirstName(custFirst.value));
    dispatch(updateFirstName(custFirst.value));
    dispatch(attachFirstName(custFirst.value));
    validateForm();
  }
  function handleLast() {
    let custLast = document.getElementById("custLast");
    dispatch(modifiyCustomerLastName(custLast.value));
    dispatch(updateLastName(custLast.value));
    dispatch(attachLastName(custLast.value));
    validateForm();
  }
  function handleEmail() {
    let custEmail = document.getElementById("custEmail");
    dispatch(modifiyCustomerEmail(custEmail.value));
    dispatch(updateEmail(custEmail.value));
    dispatch(attachEmail(custEmail.value));
    validateForm();
  }
  function handlePhone() {
    let custPhone = document.getElementById("custPhone");
    dispatch(modifiyCustomerPhone(custPhone.value));
    dispatch(updatePhone(custPhone.value));
    dispatch(attachPhone(custPhone.value));
    validateForm();
  }
  // Back Button
  function revertCustomerInfoSection() {
    const item = document.getElementById(`${selectedTime}`);
    item.checked = false;
    dispatch(modifiyCustomerSection("invisible"));
    dispatch(modifiyTimeButtonSection("visible"));
    dispatch(modifiyIsTimeSelected(false));
    dispatch(modifiyTimeSelected(""));
    dispatch(updateTime(""));
    dispatch(modifiyTimeContainer("enabled"));
    dispatch(modifiyTimeNextButton("disabled"));
  }

  // Next Button
  function disableParentSection() {
    dispatch(updateParentSection("invisible"));
    dispatch(updateSummarySection("visible"));
  }
  return (
    <CustomerInfoContent id={section}>
      <SectionTitle>Enter Customer Details</SectionTitle>
      <Form>
        <FirstName>
          <Label>
            <Required>*</Required> First Name
          </Label>
          <Input
            id="custFirst"
            onKeyUp={handleFirst}
            onKeyDown={validateFirstName}
          ></Input>
          <ErrorMessage id="firstName"></ErrorMessage>
        </FirstName>
        <LastName>
          <Label>
            <Required>*</Required> Last Name
          </Label>
          <Input
            id="custLast"
            onKeyUp={handleLast}
            onKeyDown={validateLastName}
          ></Input>
          <ErrorMessage id="lastName"></ErrorMessage>
        </LastName>
        <Email>
          <Label>
            <Required>*</Required> Email
          </Label>
          <EmailInput
            id="custEmail"
            onKeyUp={handleEmail}
            onKeyDown={validateEmail}
          ></EmailInput>
          <ErrorMessage id="email"></ErrorMessage>
        </Email>
        <PhoneNumber>
          <Label>
            <Required>*</Required> Phone Number
          </Label>
          <Input
            id="custPhone"
            onKeyUp={handlePhone}
            onKeyDown={validatePhone}
          ></Input>
          <ErrorMessage id="phone"></ErrorMessage>
        </PhoneNumber>
      </Form>
      <ButtonSection>
        <Back onClick={revertCustomerInfoSection}>Back</Back>
        <Review onClick={disableParentSection} className={nextButton}>
          Review
        </Review>
      </ButtonSection>
    </CustomerInfoContent>
  );
};

export default CustomerInformation;
