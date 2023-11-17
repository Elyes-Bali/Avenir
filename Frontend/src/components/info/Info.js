import React from "react";
import "./Info.css";
import Footer from "../footer/Footer";

const Info = () => {
  return (
    <div className="infodiv mdd">
      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="container  shadow col-md-4">
              <div className="free ctr">
                <h6 className="display-5 h5 fint-weight-semibold mb-2 text-black">
                  À propos de Meilleur Avenir
                </h6>
                <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p>
              </div>
              <img src="/images/avenir.png" />
              <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p>{" "}
             
            </div>
            <div className="col-md-8 pl-5">
              <div className="col-md-4 col-lg-9">
                <div className="flex  row">
                  <h1>
                    <b> Notre vision</b>
                  </h1>
                  <h2>Bienvenue à Meilleur Avenir</h2>
                  <p>
                    Où nous envisageons un avenir défini par le progrès,
                    l'inclusion et le changement positif. Nous nous engageons à
                    servir le peuple et à construire une société axée sur la
                    communauté qui se nourrit d'unité et de collaboration.
                  </p>
                  <p>
                    <strong>Nos principes fondateurs</strong>
                    <br />
                    Fondé en 2023, Meilleur Avenir a été créé avec la conviction
                    que chaque citoyen mérite de s'exprimer et de jouer un rôle
                    actif dans la construction de l'avenir de notre pays. Nos
                    principes fondamentaux sont fondés sur la transparence, la
                    responsabilité et un sens profond des responsabilités envers
                    nos électeurs.
                  </p>
                  <h2>
                    <strong>Notre programme électoral :</strong>
                  </h2>
                  <p>
                    <strong>1. Renforcer les communautés : </strong>
                    <br />
                    Objectif : Transférer les pouvoirs de décision aux
                    communautés locales. Pourquoi : Nous croyons en la force des
                    connaissances locales et au pouvoir des communautés de
                    conduire leur développement.
                  </p>

                  <p>
                    <strong>2. Le développement durable :</strong>
                    <br />
                    Objectif : Mettre en œuvre des politiques favorisant la
                    durabilité environnementale. Pourquoi : Garantir un avenir
                    plus sain et plus vert aux générations futures.
                  </p>
                  <br />

                  <p>
                    <strong> 4. Des soins de santé pour tous :</strong> <br />
                    Objectif : Renforcer l'infrastructure des soins de santé et
                    garantir l'accès universel : Renforcer l'infrastructure des
                    soins de santé et garantir un accès universel. Pourquoi :
                    Des citoyens en bonne santé construisent une nation
                    prospère.
                  </p>

                  <p>
                    <strong>
                      {" "}
                      5. Croissance économique et création d'emplois :
                    </strong>{" "}
                    <br />
                    Objectif : Favoriser un environnement propice à une
                    croissance économique durable et à la création d'emplois :
                    Favoriser un environnement propice à une croissance
                    économique durable et à la création d'emplois.
                  </p>

                  <p>
                  <strong> Nos valeurs :</strong><br/> 
                  <strong>Intégrité : </strong>
                    Nous nous engageons à respecter les normes éthiques les plus strictes dans nos actions et nos décisions.<br/> 
                    <strong> Inclusion : </strong>
                    Chaque voix compte, et nous nous efforcerons activement d'inclure des perspectives diverses.<br/> 
                    <strong> Collaboration : </strong>
                    Nous croyons qu'il faut travailler avec les citoyens pour construire un avenir meilleur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Info;
