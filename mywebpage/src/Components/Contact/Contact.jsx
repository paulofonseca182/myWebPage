import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <p className="contact-title">Contato</p>
      
      <div className="contact-subcontainer">
        <div className="contact-subcontainer-icon">
        <a target="_blank" href="https://www.linkedin.com/in/paulofonsecadev/" className="contact-icon" >
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/paulofonseca182" className="contact-icon">
          <FaGithub />
        </a>
        <a href="mailto:pfonseca.arq@gmail.com?subject=Contato%20pelo%20Portf%C3%B3lio&body=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20com%20voc%C3%AA." target="_blank" className="contact-icon">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/5537999061018?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho.%20Podemos%20conversar%3F" target="_blank" className="contact-icon">
          <FaWhatsapp />
        </a>
        <a target="_blank" href="https://www.instagram.com/fonsecapauloh/" className="contact-icon">
          <FaInstagram />
        </a>
      </div>
      </div>
    </div>
  );
}

export default Contact;
