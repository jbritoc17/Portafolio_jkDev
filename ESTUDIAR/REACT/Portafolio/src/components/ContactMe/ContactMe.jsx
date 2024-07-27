import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container" id="sectionContactMe">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <a href="mailto:jbritoc17@gmail.com" Subject="Interes en tu cv">
            <ContactInfoCard iconUrl="../../assets/images/mail_icon.svg" />
          </a>
          <a href="https://github.com/jbritoc17" target="_blank">
            <ContactInfoCard iconUrl="../../assets/images/github_icon.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/jean-carlos-augusto-brito-cuesta-396a50241/"
            target="_blank"
          >
            <ContactInfoCard
              iconUrl="../../assets/images/linkedin_icon.svg"
              text={""}
            />
          </a>
          <div className="download-CV">
            <a
              className="cv_link"
              href="/CV_JeanBrito.pdf"
              download="CV_JeanBrito.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
