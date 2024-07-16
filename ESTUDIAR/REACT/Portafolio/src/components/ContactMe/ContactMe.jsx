import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <a href="">

          <ContactInfoCard
            iconUrl="../../src/assets/images/mail_icon.svg"
            text={"jbritoc17@gmail.com"}
            />

            </a>
          <ContactInfoCard
            iconUrl="../../src/assets/images/github_icon.svg"
            text={"https://github.com/"}
          />

          <ContactInfoCard
            iconUrl="../../src/assets/images/linkedin_icon.svg"
            text={"https://www.linkedin.com/in/jean-carlos-augusto-brito-cuesta-396a50241/"}
           
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
