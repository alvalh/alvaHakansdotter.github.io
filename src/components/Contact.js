import React from "react";
import ContactMe from "./ContactForm/ContactMe.js";
import "./Contact.css";

import githubLogo from "./images/githubLogo.png";
import linkedinLogo from "./images/linkedinLogo.png";

function Contact() {
  return (
    <div className="Contact">
      <div></div>
      <div className="ContactForm">
        <div>
          <p>CONTACT</p>
          <p className="Question">Wish to contact me?</p>
          <p className="Text">
            Send me an email or check out my linkedin or github below
          </p>
        </div>
        <ContactMe></ContactMe>
      </div>
      <div className="Links">
        <div>
          <a href="https://github.com/alvalh" target="_blank" rel="noreferrer">
            <img src={githubLogo} alt="example" />
          </a>
          <a
            href="https://www.linkedin.com/in/alva-h%C3%A5kansdotter-b4902b231/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinLogo} alt="example" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
