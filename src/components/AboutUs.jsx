import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <Header />

      <div className="container container-about">
        <div className="row row-cols-1 row-cols-lg-2 g-5 mb-5">
          <div className="col">
            <div className="card card-duracion-tecnologias shadow">
              <span className="p-2 rounded icon-about">
                <i className="fs-5 bi bi-clock text-white"></i>
              </span>
              <div className="card-body mt-3">
                <h5 className="card-title">Duración</h5>
                <p className="card-about fs-5">
                  Hackflix es un proyecto de streaming de películas desarrollado a lo largo de un
                  bootcamp, con la selección de contenidos a través de la API de The Movie Database.
                  Diseño de una interfaz intuitiva para proporcionar una experiencia atractiva a los
                  usuarios.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-duracion-tecnologias shadow">
              <span className="p-2 rounded icon-about">
                <i className="fs-5 bi bi-code-square text-white"></i>
              </span>
              <div className="card-body mt-3">
                <h5 className="card-title">Tecnologías</h5>
                <p className="card-about fs-5">
                  Desarrollé una plataforma de streaming interamente con herramientas de Front-End,
                  usando las siguientes tecnológias: <strong>React, Redux, React Bootstrap y Bootstrap</strong>. <strong>Git, GitHub</strong> para la gestión de archivos y para alojamiento he
                  utilizado <strong>Vercel.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-light" />
        <div className="col-sm-7 col-md-6 col-lg-5 col-xl-5 col-xxl-4 m-auto card-body-foto">
          <div className="card border-0 p-3">
            <img src="foto_linkedin.jpg" className="img-team shadow mx-auto" alt="..." />
            <div className="card-body text-center">
              <h3 className="card-title">Virginia Barbaro</h3>
              <p className="card-text fw-bold fs-5">Full Stack Developer Jr.</p>
            </div>

            <div className="icons-team text-center">
              <Link to="https://www.linkedin.com/in/virginia-barbaro/"
                target="_blank"
                className="text-black"
              >
                <i className="bi bi-linkedin me-2"></i>
              </Link>
              <Link to="https://github.com/VirginiaBarbaro" target="_blank" className="text-black">
                <i className="bi bi-github me-2"></i>
              </Link>
              <Link
                to="mailto:virginiabarbaro@icloud.com?subject=&body=Hola,%20quiero%20contactarte"
                target="_blank"
                className="text-black"
              >
                <i className="bi bi-envelope-fill "></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
