import React from "react";
import "./MobileNav.css";

export const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src=".../" alt="" />

          <ul>
            <li>
              <a className="menu-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#sectionSkills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#sectionProjects">
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" href="#sectionWorkExperience">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" href="#sectionContactMe">
                Contact Me
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
