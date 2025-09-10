import React from 'react';
import '../css/style.css';
import html from "../img/html.jpg";
import css from "../img/css.png";
import tailwind from "../img/tailwind.jpg";
import react from "../img/react.png";
import js from "../img/js.jpg";
import bootstrap from "../img/bootstrap-logo.png";

const Skills = () => {
  const skills = [
    {
      img: html,
      alt: "html-logo",
      level: "97%",
      desc: "Usado para estruturar e organizar o conteúdo de páginas web."
    },
    {
      img: css,
      alt: "css-logo",
      level: "95%",
      desc: "Oferece uma série de recursos e propriedades para controlar a aparência de elementos HTML de forma precisa e dinâmica."
    },
    {
      img: react,
      alt: "react-logo",
      level: "90%",
      desc: "Biblioteca JavaScript de código aberto usada para construir interfaces de usuário."
    },
    {
      img: bootstrap,
      alt: "bootstrap-logo",
      level: "85%",
      desc: "Framework de CSS altamente personalizável e baseado em utilitários que permite criar rapidamente layouts responsivos."
    },
    {
      img: js,
      alt: "js-logo",
      level: "78%",
      desc: "Linguagem de programação amplamente utilizada para desenvolvimento web."
    },
    {
      img: tailwind,
      alt: "tailwind-logo",
      level: "70%",
      desc: "Framework de CSS altamente personalizável e baseado em utilitários que permite criar rapidamente layouts responsivos."
    },
  ];

  return (
    <div className='container-fluid col-11  my-5 p-5 rounded-4 shadow-sm bg-white' id='skills'>
      <div className='d-flex align-items-center mb-5'>
        <h2 className='me-2 fw-bold text-dark'>Habilidades</h2>
      </div>

      {skills.map((skill, index) => (
        <div key={index} className='mb-5'>
          <div className="d-flex align-items-center mb-2">
            <img
              src={skill.img}
              alt={skill.alt}
              width={40}
              height={40}
              className='me-3 rounded object-fit-cover'
            />
            <div className="progress flex-grow-1" style={{ height: '25px' }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                role="progressbar"
                style={{ width: skill.level }}
                aria-valuenow={parseInt(skill.level)}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {skill.level}
              </div>
            </div>
          </div>
          <p className="text-secondary mb-0">{skill.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;

