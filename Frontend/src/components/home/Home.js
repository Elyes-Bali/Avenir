import React from "react";
import Slider from "../slider/Slider";
import "./Home.css";
import About from "../about/About";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import Footer from "../footer/Footer";

const Home = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");
  return (

    <div className="home mdd">
      <section>
        <div className="div1 row ">
          <div className="div2 col-md-6 ">
            <div className="container txte justify-content-center ">
          <h1 className="lead text-center fs-1 mb-5 text-black "> Meilleur Avenir</h1>
      <h2><strong> Construire un pays futuriste aligné sur les objectifs de développement durable </strong></h2>
      <a className="btn btn-info mb-4 mt-5" href="/info">Lire la suite</a>
      </div>
          </div>
          <div className="div3 col-md-6"></div>
        </div>
        <div className="container wlc mt-5 mb-6">
        <h1>Bienvenue sur notre site officiel</h1>
        <p>Pour un meilleur avenir</p>
        </div>
        <div className="mb-5">
        <Slider />
        </div>
        <div className="mt-5 mb-5">
         <About id="contact" id1="services"/>
        </div>
        <div className="mt-5 mb-5">
         <Services id1="services"/>
        </div>
        <div className="mb-5">
        {!isAdmin && token &&
        <Contact id="contact"/>
        }
        </div>
      </section>
        <Footer/>
    </div>
  );
};

export default Home;
