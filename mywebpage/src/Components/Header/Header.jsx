import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
      <div>
          <p className='header-name'>Paulo Fonseca</p>
          <p className='header-profession'>Desenvolvedor Front-End</p>
      </div>

      <div className='header-text'>
          <p>Acredito que a colaboração e o aprendizado contínuo são a chave 
            para o sucesso no desenvolvimento Front-End. Sou Paulo Fonseca,
            um desenvolvedor apaixonado por tecnologia. 
            Adoro trabalhar em equipe, compartilhar conhecimento e construir
            soluções que impactem positivamente a vida das pessoas.
          </p>
      </div>
    </div>
  )
}

export default Header
