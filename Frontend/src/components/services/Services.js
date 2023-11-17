import React from "react";



const Services = ({id1}) => {
  return (
    <div id={id1}>
      <section >
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fd-4 text-center mb-0">Nos objectifs</h3>
              <h1 className="display-6 text-center mb-4">
              Nos <b>Objectifs</b> Ambitieux
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                <i class="fa fa-users fa-4x mb-4 text-primary" aria-hidden="true"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Renforcer les <br/>communautés</h5>
                  <p className="card-text lead">
                  Dévolution des pouvoirs de décision aux communautés locales
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                <i class="fa fa-industry fa-4x mb-4 text-primary" aria-hidden="true"></i>
                  
                  <h5 className="card-title mb-3 fs-4 fw-bold">Développement durable</h5>
                  <p className="card-text lead">
                  Promouvoir la durabilité environnementale.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                <i class="fa fa-graduation-cap fa-4x mb-4 text-primary" aria-hidden="true"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">L'éducation inclusive</h5>
                  <p className="card-text lead">
                  Améliorer l'accès à une éducation de qualité pour tous.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 down */}

        

        </div>
      </section>
      
    </div>
  );
};

export default Services;
