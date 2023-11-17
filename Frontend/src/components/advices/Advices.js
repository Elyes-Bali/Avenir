import React from "react";
import "./Advices.css";
import Footer from "../footer/Footer";

const Advices = () => {
  return (
    <div className="mdd">
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white"></h1>

              <h1 className="lead para text-center display-4 mb-3  text-white">
              Comment Faire Avancer Notre Pays ?
              </h1>

              <div className="buttons d-flex justify-content-center">
                <div className="App"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 text-center mb-4">
              Notre <b>Centre</b> de conseil
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;  Éduquez-vous
                  </h5>
                  <p className="card-text lead">
                  
Restez informé sur l'histoire, la culture et l'actualité de votre pays pour contribuer de manière significative.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Bénévole localement
                  </h5>
                  <p className="card-text lead">
                  Participez à des projets communautaires et faites du bénévolat pour un impact positif sur votre communauté.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  &nbsp; &nbsp;&nbsp;  Promouvez la durabilité
                  </h5>
                  <p className="card-text lead">
                  Adoptez des habitudes respectueuses de l'environnement au quotidien pour préserver les ressources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 down */}
          

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  Soutenez les entreprises locales
                  </h5>
                  <p className="card-text lead">
                  Favorisez les produits et services locaux afin de soutenir l'économie de votre communauté.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; Encouragez <br/> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;l'entrepreneuriat
                  </h5>
                  <p className="card-text lead">
                  Soutenez les petites entreprises pour stimuler le développement économique et créer des emplois.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  Investissez dans le développement personnel
                  </h5>
                  <p className="card-text lead">                
                  Améliorez constamment vos compétences pour contribuer au progrès de votre communauté et de votre pays.
                  </p>
                </div>
              </div>
            </div>
          </div>


            {/* 3 down */}
     

            <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  &nbsp; &nbsp; Partagez les connaissances
                  </h5>
                  <p className="card-text lead">
                  Partagez vos compétences. Organisez des ateliers ou des programmes communautaires.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  &nbsp; &nbsp; Économisez les ressources
                  </h5>
                  <p className="card-text lead">
                  Économisez l'énergie, l'eau et d'autres ressources au quotidien pour un avenir durable.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    {" "}
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Soyez un modèle
                  </h5>
                  <p className="card-text lead">
                  Montrez l'exemple avec des comportements positifs et éthiques pour inspirer votre communauté.
                  </p>
                </div>
              </div>
            </div>
          </div>

            
        </div>
      </section>

      <div className="foter">
        <Footer />
      </div>
    </div>
  );
};

export default Advices;
