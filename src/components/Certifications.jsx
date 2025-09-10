import React from 'react'
import diploma from "../img/diploma.png"
import bootstrap from "../img/bootstrap.png"
import front from "../img/front.jpg"
import introducao from "../img/introducao.png"
import logica from "../img/logica.png"
import modelagem from "../img/modelagem.png"
import sitesimples from "../img/site-simples.png"
import web from "../img/web.png"
import dio from "../img/dio.png"

const certifications = [
  { title: "Universidade Cruzeiro do Sul - Diploma Análise e Desenvolvimento de Sistemas", img: diploma },
  { title: "Udemy - Certificado Bootstrap 5 do básico ao avançado ", img: bootstrap },
  { title: "Udemy - Formação front end", img: front },
  { title: "Fundação Bradesco - Introdução á Programação Orientada á Objetos", img: introducao },
  { title: "Fundação Bradesco - Fundamentos de Lógica de Programação", img: logica },
  { title: "Fundação Bradesco - Modelagem de dados", img: modelagem },
  { title: "Fundação Bradesco - Crie um site simples usando HTML, CSS e JavaScript", img: sitesimples },
  { title: "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais - Web Designer", img: web },
  { title: "Dio - Versionamento de Código com Git e Github", img: dio },
];

const Certifications = () => {
  return (
    <div id='certifications' className='container-fluid col-11 py-5 px-4 border-start border-5 border-danger-subtle'>
      <div className="accordion shadow-sm bg-white rounded-4 p-5" id="accordionExample">

        <div className="d-flex align-items-center gap-3 mb-5">
          <i className="bi bi-patch-check-fill fs-3 text-danger mt-1 mb-3"></i>
          <h2 className="fw-bold text-danger m-0">Certificados</h2>
        </div>

        {certifications.map((cert, index) => {
          const collapseId = `collapse${index}`;
          const headingId = `heading${index}`;
          return (
            <div className="accordion-item border-0 border-bottom" key={index}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={collapseId}
                >
                  {cert.title}
                </button>
              </h2>
              <div
                id={collapseId}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={headingId}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-center">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="img-fluid shadow rounded-3"
                    style={{ maxHeight: "500px", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Certifications;



