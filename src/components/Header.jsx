import React, { useState } from 'react';
import '../css/style.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            {[
              { label: 'Home', href: '#' },
              { label: 'Sobre', href: '#About' },
              { label: 'Habilidades', href: '#skills' },
              { label: 'Certificados', href: '#certifications' },
              { label: 'Projetos', href: '#projects' },
              { label: 'Contato', href: '#contact' },
              { label: 'Baixar CV', href: '/cv_adriely.pdf', download: true },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link"
                  href={item.href}
                  onClick={handleLinkClick}
                  {...(item.download ? { download: true } : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

