import React from 'react';
import box from "../img/boxshadow.png";
import expo from "../img/expo_art.png";
import formb from "../img/form-bootstrap.png";
import formulario from "../img/formulario.png";
import gerador from "../img/Gerador.png";
import lista from "../img/lista.png";
import qr from "../img/qrcode.png";
import whey from "../img/whey_protein.png";

import '../css/style.css';

const Projects = () => {
  const projectList = [
    { img: box, title: "Box Shadow", desc: "Efeitos visuais com CSS.", github: "https://github.com/AdrielyQueiroz/Box_Shadow", live: "https://adrielyqueiroz.github.io/Box_Shadow/" },
    { img: expo, title: "Exposição Artística", desc: "Layout responsivo para galeria de arte.", github: "https://github.com/AdrielyQueiroz/Exposition_Art", live: " https://adrielyqueiroz.github.io/Exposition_Art/" },
    { img: formb, title: "Formulário Bootstrap", desc: "Formulário estilizado com Bootstrap.", github: "https://github.com/AdrielyQueiroz/Form_Register_Bootstrap", live: "https://adrielyqueiroz.github.io/Form_Register_Bootstrap/" },
    { img: formulario, title: "Validação de Formulário", desc: "Formulário com validação personalizada.", github: "https://github.com/AdrielyQueiroz/form_avalia", live: "https://adrielyqueiroz.github.io/form_avalia/" },
    { img: gerador, title: "Gerador de Senhas", desc: "App para gerar senhas seguras.", github: "https://github.com/AdrielyQueiroz/Gerador_senha", live: "https://adrielyqueiroz.github.io/Gerador_senha/" },
    { img: lista, title: "Lista de Tarefas", desc: "Gerenciador de tarefas com JS.", github: "https://github.com/AdrielyQueiroz/Lista_de_tarefas", live: "https://adrielyqueiroz.github.io/Lista_de_tarefas/" },
    { img: qr, title: "Gerador de QR Code", desc: "Projeto com API de QR Code.", github: "https://github.com/AdrielyQueiroz/qrCode", live: "https://adrielyqueiroz.github.io/qrCode/" },
    { img: whey, title: "Loja de Suplementos", desc: "Landing page de suplemento.", github: "https://github.com/AdrielyQueiroz/Whey_Bootstrap", live: "https://adrielyqueiroz.github.io/Whey_Bootstrap/" },
  ];

  return (
    <div className="container-fluid col-11 mt-5 py-5 px-4 border-end-0 border-5 border-danger-subtle rounded-4" id="projects">
      <h2 className="mb-5 text-center fw-bold text-danger mt-4">
        <i className="bi bi-folder2-open me-2"></i>
        Projetos
      </h2>

      <div id="carouselProjects" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {projectList.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselProjects"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {projectList.map((project, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
              data-bs-interval="5000"
            >
              <div className="d-flex justify-content-center">
                <div className="project-slide position-relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-img rounded-3"
                  />
                  <div className="overlay-white"></div>
                  <div className="project-content text-center">
                    <h5 className="fw-bold border-bottom border-1 border-dark-subtle">{project.title}</h5>
                    <p className="small mt-3 mb-4 bg-danger rounded w-50 text-white border border-top-0 border-danger-subtle border-2">{project.desc}</p>
                    <div className="mt-3">
                      <a href={project.github} className="btn btn-outline-danger btn-sm me-2" target="_blank" rel="noopener noreferrer">
                        Ver no GitHub
                      </a>
                      <a href={project.live} className="btn btn-danger btn-sm" target="_blank" rel="noopener noreferrer">
                        Ver Online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselProjects" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselProjects" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
