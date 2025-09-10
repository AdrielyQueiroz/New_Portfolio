import React from 'react';
import "../css/style.css";
import home from '../img/home.jpg';

const Home = () => {
  return (
    <div className="home d-flex align-items-center justify-content-center text-center">
      <div className="home-text">
      <h1 className="home-title fw-bold mb-3 pb-2 border-bottom border-3 border-danger">
        Front end Developer
      </h1>
        <p className="border-start border-4 border-danger-subtle mt-3 ps-3 fs-5 shine-text">
          <em>Apaixonada por criar experiências visuais incríveis.</em>
        </p>
      </div>
    </div>
  );
};

export default Home;



