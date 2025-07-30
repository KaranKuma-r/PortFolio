import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer-container">
      <h6 className="about-me">
        Karan <span className="name">Kumar</span>
      </h6>

      <div className="footer-icons">
        <a href="https://github.com/KaranKuma-r" target="_blank" rel="noopener noreferrer">
          <FaGithub title="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/karan-kumar-b991852a7/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin title="LinkedIn" />
        </a>
        <a href="tel:+916202216048">
          <FaPhone title="Call" />
        </a>
        <a href="mailto:kk5214662@gmail.com">
          <FaEnvelope title="Email" />
        </a>
       
      </div>
      <p className="thank-you-msg">Thanks for visiting my portfolio 🙌</p>
    </div>
  );
};
