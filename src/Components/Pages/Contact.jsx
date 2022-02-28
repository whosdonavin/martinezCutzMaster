import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import Image from "../../Images/Pinstripe.svg";
import {
  setName,
  setNameIsValid,
  setNameMessage,
  setPhone,
  setPhoneIsValid,
  setPhoneMessage,
  setEmail,
  setEmailIsValid,
  setEmailMessage,
  setMessage,
  setMessageIsValid,
  setMessageMessage,
} from "../../Features/Contact";
const ContactPage = styled.section`
  width: 60%;
  margin: 0 auto;
  ${mobile({ width: "100%" })}
`;
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
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Label = styled.label`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  ${mobile({ "font-size": "1rem" })}
`;
const Input = styled.input`
  background: black;
  border: none;
  color: white;
  font-family: "Eczar";
  font-size: 1rem;
  border-bottom: 1px solid #bc9355;
  &:focus {
    outline: none;
  }
`;
const MessageBox = styled.textarea`
  background: black;
  font-size: 1rem;
  font-family: "Eczar";
  border: none;
  border-bottom: 1px solid #bc9355;
  resize: none;
  height: 10rem;
  color: white;
  &:focus {
    outline: none;
  }
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Email = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Validation = styled.span`
  color: red;
`;
const ButtonSection = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  width: 40%;
  ${mobile({ width: "100%" })}
`;
const Send = styled.button`
  color: white;
  font-family: "Eczar";
  font-size: 1rem;
  background: black;
  border-radius: 5px;
  border: 1px solid #bc9355;
  width: 50%;
  padding: 0.5rem 1.75rem;
  ${mobile({ width: "100%" })}

  &:hover {
    background: #bc9355;
    color: black;
    cursor: pointer;
  }
`;
const ContactFormMessage = styled.div`
  margin: 1rem 0;
  ${mobile({ "text-align": "center" })}
`;

const ContactFormMessageText = styled.p`
  font-size: 1.25rem;
  text-align: center;
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  ${mobile({ "flex-direction": "column", "align-items": "center" })}
`;
const Hours = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({ "text-align": "center" })}
`;
const GoldBar = styled.span`
  color: #bc9355;
  margin: 0 0.5rem;
`;
const Weekdays = styled.span``;
const Saturday = styled.span``;
const Offdays = styled.span``;
const SocialMedia = styled.div`
  ${mobile({ "margin-top": "1rem" })}
`;
const SocialLink = styled.a`
  color: white;
  font-size: 2rem;
  margin: 0 0.5rem;
  &:hover {
    color: #bc9355;
    cursor: pointer;
  }
`;
const Contact = () => {
  const contactState = useSelector((state) => state.contact.value);
  const {
    name,
    nameState,
    phone,
    phoneState,
    email,
    emailState,
    message,
    messageState,
  } = contactState;
  const dispatch = useDispatch();
  const [formMessage, setFormMessage] = useState("");
  const [validForm, setValidForm] = useState("disabled");
  const patterns = {
    name: [
      /^[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}$/,
      "First and last name are required.",
    ],
    phoneNumber: [/^\d{9}$/, "The phone number must be 10 digits."],
    email: [
      /^[\w.-]{2,30}@[\w.]{2,30}\.[a-zA-Z]{2,4}$/,
      "Email address must be a valid address",
    ],
    message: [/^.{20,255}$/, "Invalid message"],
  };

  function handleName() {
    let nameInput = document.getElementById("name");
    let regex = patterns.name[0];
    let errorMessage = patterns.name[1];
    dispatch(setName(nameInput.value));

    if (regex.test(name) === true) {
      dispatch(setNameMessage(""));
      dispatch(setNameIsValid(true));
    } else {
      dispatch(setNameMessage(errorMessage));
      dispatch(setNameIsValid(false));
    }
  }
  function handlePhone() {
    let phoneInput = document.getElementById("phone");
    let regex = patterns.phoneNumber[0];
    let errorMessage = patterns.phoneNumber[1];
    dispatch(setPhone(phoneInput.value));

    if (regex.test(phone) === true) {
      dispatch(setPhoneMessage(""));
      dispatch(setPhoneIsValid(true));
    } else {
      dispatch(setPhoneMessage(errorMessage));
      dispatch(setPhoneIsValid(false));
    }
  }
  function handleEmail() {
    let emailInput = document.getElementById("email");
    let regex = patterns.email[0];
    let errorMessage = patterns.email[1];
    dispatch(setEmail(emailInput.value));

    if (regex.test(email) === true) {
      dispatch(setEmailMessage(""));
      dispatch(setEmailIsValid(true));
    } else {
      dispatch(setEmailMessage(errorMessage));
      dispatch(setEmailIsValid(false));
    }
  }
  function handleMessage() {
    let messageInput = document.getElementById("message");
    let regex = patterns.message[0];
    let errorMessage = patterns.message[1];
    dispatch(setMessage(messageInput.value));

    if (regex.test(message) === true) {
      dispatch(setMessageMessage(""));
      dispatch(setMessageIsValid(true));
    } else {
      dispatch(setMessageMessage(errorMessage));
      dispatch(setMessageIsValid(false));
    }
  }
  function clearForm() {
    let nameInput = document.getElementById("name");
    let phoneInput = document.getElementById("phone");
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
  function validateForm(e) {
    e.preventDefault();
    const validName = nameState.isValid;
    const validPhone = phoneState.isValid;
    const validEmail = emailState.isValid;
    const validMessage = messageState.isValid;
    if (
      validName === true &&
      validPhone === true &&
      validEmail === true &&
      validMessage === true
    ) {
      setValidForm("enabled");
    } else {
      setValidForm("disabled");
    }
  }
  function submitForm(e) {
    e.preventDefault();
    setValidForm("disabled");
    axios
      .post("https://martinezcutzmaster.herokuapp.com/api/contact", {
        name: name,
        phone: phone,
        email: email,
        message: message,
      })
      .then((response) => {
        clearForm();

        setFormMessage(response.data);
        setTimeout(() => {
          setFormMessage("");
        }, 4000);
      });
  }

  return (
    <ContactPage>
      <PageTitle>
        <Title>Get In Touch</Title>
        <Pinstripe src={Image} />
      </PageTitle>
      <ContactForm id="contactForm" onChange={validateForm}>
        <ContactFormMessage className={formMessage.status}>
          <ContactFormMessageText>{formMessage.message}</ContactFormMessageText>
        </ContactFormMessage>
        <Name>
          <Label>Name</Label>
          <Input id="name" placeholder="First Last" onKeyUp={handleName} />
          <Validation>{nameState.message}</Validation>
        </Name>
        <PhoneNumber>
          <Label>Phone Number</Label>
          <Input id="phone" placeholder="XXX-XXX-XXXX" onKeyUp={handlePhone} />
          <Validation>{phoneState.message}</Validation>
        </PhoneNumber>
        <Email>
          <Label>Email</Label>
          <Input
            id="email"
            placeholder="Name@domain.com"
            onKeyUp={handleEmail}
          />
          <Validation>{emailState.message}</Validation>
        </Email>
        <Message>
          <Label>Message</Label>
          <MessageBox
            id="message"
            placeholder="Message"
            onKeyUp={handleMessage}
          />
          <Validation>{messageState.message}</Validation>
        </Message>
        <ButtonSection>
          <Send className={validForm} onClick={submitForm}>
            Send
          </Send>
        </ButtonSection>
      </ContactForm>

      <Information>
        <Hours>
          <Offdays>
            Sunday - Monday<GoldBar>|</GoldBar>Closed
          </Offdays>
          <Weekdays>
            Tuesday - Friday<GoldBar>|</GoldBar>2:00PM - 8:00PM
          </Weekdays>
          <Saturday>
            Saturday<GoldBar>|</GoldBar>7:00AM - 2:00PM
          </Saturday>
        </Hours>
        <SocialMedia>
          <SocialLink href="https://twitter.com/_AMart6?s=20" target="_blank">
            <FaTwitter />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/thebarberjournal/"
            target="_blank"
          >
            <FaInstagram />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/angel.martinez.1048554"
            target="_blank"
          >
            <FaFacebookF />
          </SocialLink>
        </SocialMedia>
      </Information>
    </ContactPage>
  );
};

export default Contact;
