import React from 'react';
import vetor from "../img/vetor-certificados.png";

const Footer = () => (
  <footer className="footer text-light py-4" id="contact">
    <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">

        <div className="order-1 order-md-1 mb-3 mb-md-0">
          <img src={vetor} alt="Vetor Certificados" className="footer-icon img-fluid" />
        </div>

        <div className="icon-link order-2 order-md-3 d-flex align-items-center gap-3 flex-wrap justify-content-center mb-3 mb-md-0">
          <a
            href="https://github.com/AdrielyQueiroz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-5"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/adriely-queiroz-b5b2481b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-5"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="mailto:AdrielySqueiroz.203@gmail.com"
            className="text-light d-flex align-items-center text-decoration-none fs-5"
          >
            <i className="bi bi-envelope-at-fill me-2"></i>
            Adrielysqueiroz.203@gmail.com
          </a>
        </div>

        <div className="order-3 order-md-2">
          <p className="mb-0 small">
            &copy; {new Date().getFullYear()} <strong>Adriely Queiroz</strong><br />
            Todos os direitos reservados.
          </p>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;

