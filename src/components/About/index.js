import React from 'react';
import logo from './logo.jpg'
import './about.css';

const About = () => {
  return (
    <div className="about-container">

      <div className="about-text">
        <h1 style={{ color: "#3C3C3C", textAlign: "center" }}>Sobre a nossa empresa</h1>
          <p>Nossa empresa é uma plataforma de streaming de filmes que oferece uma ampla variedade de conteúdos para usuários de todo o mundo. Com um catálogo em constante expansão, nosso serviço permite que os usuários assistam a filmes de diferentes gêneros, anos e países, a qualquer momento e em qualquer dispositivo. Nosso objetivo é fornecer uma experiência de entretenimento de alta qualidade, com excelente qualidade de imagem e som, além de uma interface fácil de usar e personalizada. Com recursos de recomendação personalizada e suporte ao cliente 24 horas, estamos comprometidos em oferecer a melhor experiência de streaming de filmes possível para nossos usuários.</p>
      </div>

      <div className="about-image">
        <img src={logo} alt="Empresa de streaming" />
      </div>
      
    </div>
  );
};

export default About;
