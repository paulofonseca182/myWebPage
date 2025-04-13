import React from 'react'
import './About.css'
import profile from '../../assets/public/image/profile.png'
import programmer from '../../assets/public/image/programmer.png'
import fisherman from '../../assets/public/image/fisherman.png'

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-subcontainer-one">
        <div>
          <p className="about-title">Sobre</p>
          <p className="about-text">
            Com 33 anos, natural de Dores do Indaiá - MG, moro atualmente em
            Belo Horizonte - MG e carrego uma bagagem de experiências que me
            permitem abordar o desenvolvimento web com uma perspectiva diferente
            e singular.
          </p>
        </div>

        <img
          className="about-image img-profile"
          src={profile}
          alt="profile photo"
        />
      </div>

      <div className="about-subcontainer-two">
        <img className="about-image img-desktop " src={programmer} alt="" />
        <p className="about-text">
          Minha jornada no universo do Front-End é guiada pela curiosidade
          constante e pela paixão em transformar ideias em experiências digitais
          impactantes. Desde que entrei nesse mundo, tenho me dedicado ao estudo
          contínuo das principais tecnologias do mercado, como React,
          TypeScript, JavaScript, HTML e CSS, com o objetivo de construir
          interfaces modernas, funcionais e visualmente atrativas. Busco sempre
          aplicar as melhores práticas de desenvolvimento, prezando por um
          código limpo, escalável e acessível. Além do lado técnico, valorizo
          muito a colaboração em equipe, metodologias ágeis e o aprendizado
          constante — afinal, a tecnologia está em constante evolução, e o
          profissional que busca se destacar precisa acompanhar esse ritmo. Meu
          objetivo é seguir crescendo como desenvolvedor Front-End, contribuindo
          para projetos que façam a diferença na vida das pessoas e agreguem
          valor real aos negócios.
        </p>
        <img className="about-image img-mobile " src={programmer} alt="" />
      </div>

      <div className="about-subcontainer-three">
        <p className="about-text">
          Além do meu amor pelo desenvolvimento, busco equilíbrio na minha
          rotina através de atividades que me ajudam a relaxar e manter a mente
          sempre renovada. A academia faz parte do meu dia a dia, não só como um
          hábito de saúde, mas também como uma forma de disciplina e superação.
          Nas horas vagas, gosto de explorar trilhas e estar em contato com a
          natureza, apreciando paisagens incríveis e recarregando as energias ao
          ar livre. Outra paixão que me acompanha é a pescaria, um momento de
          tranquilidade que me permite desacelerar, refletir e aproveitar o
          silêncio das águas. Essas atividades não só me ajudam a manter o foco
          e o bem-estar, mas também alimentam minha criatividade para os
          desafios do desenvolvimento
        </p>
        <img className="about-image img-hobbie " src={fisherman} alt="" />
      </div>
    </div>
  );
}

export default About
