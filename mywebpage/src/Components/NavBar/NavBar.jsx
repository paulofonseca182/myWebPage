import React, { useState } from 'react';
import './NavBar.css';
import avatar from '../../assets/public/image/avatar.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigation-bar-container">
      
      <div className='menu-mobile'>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="hamburger-icon" />
          ) : (
            <FaBars className="hamburger-icon" />
          )}
        {menuOpen && (
            <nav className="navigation-bar-mobile">
              <a href="#about">Sobre</a>
              <a href="#skills">Habilidades</a>
              <a href="#experience">Experiência</a>
              <a href="#projects">Projetos</a>
              <a href="#training">Formação</a>
              <a href="#certificates">Certificados</a>
              <a href="#contact">Contato</a>
            </nav>
        )}
        </div>

      </div>

      <img onClick={handleClick} className="avatar" src={avatar} alt="" />

      <nav className="navigation-bar">
        <a href="#about">Sobre</a>
        <a href="#skills">Habilidades</a>
        <a href="#experience">Experiência</a>
        <a href="#projects">Projetos</a>
        <a href="#training">Formação</a>
        <a href="#certificates">Certificados</a>
        <a href="#contact">Contato</a>
      </nav> 
    </div>
  );
}

export default NavBar
