import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "@mui/material";
import "./ContactMe.css";

const ContactMe = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setSuccess(false);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, [success]);

  const successFunc = () => {
    setSuccess(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_21lwy9m",
        "template_weehhtu",
        form.current,
        "-HjT8M_nt3QBuzDrV"
      )
      .then(
        (result) => {
          console.log(result.text);
          successFunc();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <input type="submit" title="Send" value="Send" />
        {success ? (
          <Alert sx={{ height: "50%" }} severity="success">
            Sent!
          </Alert>
        ) : (
          <div />
        )}
      </div>
    </form>
  );
};

export default ContactMe;
