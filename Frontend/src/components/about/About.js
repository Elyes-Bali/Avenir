import React from "react";

const About = ({ id, id1 }) => {
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");
  return (
    <div>
      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/avenir.png" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6"><br/><br/><br/><br/>
              <h3 className="fs-5">À Propos de Nous</h3>
              <h1 className="display-6">
              Qui<b> sommes</b> nous ?
              </h1>
              <hr />
              <p className="lead mb-4">
              Bienvenue à <b>Meilleur Avenir</b>, où nous envisageons un avenir défini par le progrès, l'inclusion et le changement positif.<br/> 
              Nous nous engageons à servir le peuple et à construire une société axée sur la communauté qui se nourrit d'unité et de collaboration.
              </p>
              <a
                href={`#${id1}`}
                className="btn btn-primary rounded-pill px-4 py-2"
              >
                Nos Services
              </a>
              {!isAdmin && token &&
              <a
                href={`#${id}`}
                className="btn btn-primary rounded-pill px-4 py-2 ms-2"
              >
                Contactez-nous
              </a>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
