import React from 'react'
import './NavBar.css';
import avatar from '../../assets/public/image/avatar.png';

function NavBar() {
  return (
    <div className='navigation-bar-container'>
      <img className='avatar' src={avatar} alt="" />
      <nav className='navigation-bar'>
        <a href="#about">Sobre</a>
        <a href="skills">Habilidades</a>
        <a href="experience">Experiencia</a>
        <a href="projects">Projetos</a>
        <a href="training">Formação</a>
        <a href="certificates">Certificados</a>
        <a href="contact">Contato</a>
      </nav>
    </div>
  );
}

export default NavBar
