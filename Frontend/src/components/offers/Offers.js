import React, { useEffect, useState } from "react";


import OffCard from "./OffCard";
import "./Offers.css";
import Modal from "./Modal";
import { GetAllUsers } from "../../apis/UserApi";

const Offers = () => {
  // const [offer, setOffer] = useState([]);
  
  // const isOffer = async () => {
  //   const oflg = await GetAllOff();
  //   setOffer(oflg);
  // };
  const [allusers, setAllusers] = useState([]);
  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
  };
  



  useEffect(async () => {
    isUsers();
    
  }, []);
  console.log(allusers);
  return (
    <div>
      <section id="offers">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
         
              <h1 className="display-4  fw-bolder modale text-center text-white">
                 <Modal/>
                <br />
               
              </h1>
             
            </div>
          </div>
        </div>
      </section>

      

      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="container  shadow col-md-4">
              <div className="free ctr">

                <h6 className="display-5 h5 fint-weight-semibold mb-2 text-dark">
                Quoi de neuf ici ? 
                </h6>
                <p>
                  <b>
                  Notre communauté a beaucoup à donner.
                  </b>
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="col-md-4 col-lg-9">
                <div className="flex  row">
                  {allusers?.map((el,index) => (
                    <OffCard off={el} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
