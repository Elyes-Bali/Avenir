import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { GetAllUsers } from "../../apis/UserApi";
import "./Dash.css";
import { hundelUpdate } from "../../apis/UserApi";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import SideBar from "./SideBar";
const ClienDB = () => {
  const [allusers, setAllusers] = useState([]);

   const handlemessage = async (email) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const data={email:email,message:`Hello our dear Client, there is an event in two days .Thank you.`}
    try {
      const res = await axios.post("/api/sendemail/mailer", data, config);

    
    } catch (error) {
      console.log(error);
    }
  };

  const hundelPosted = async (el,email) => {
    handlemessage(email);
  };
  

  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
  };

  useEffect(() => {
    isUsers();
  }, []);
  console.log(allusers);

  return (
    <div className="">
      <div className="sde">
      <SideBar />
      </div>
    
      <div className="ctn w-100 ">
        <div className="content-wrapper cadre">
          <div className="card cdr w3-hover-shadow">
            <div className="card-header">
              <h5 className="card-title">Udonnées de l'utilisateur</h5>
              <div className="card-tools"></div>
            </div>
            <div className="card-body">
            <ReactHTMLTableToExcel   id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>
                    <Table className="table" id="table-to-xls">
                <thead className="">
                  <tr>
                    <th>Nom</th>
                    <th>E-mail</th>
                    <th>Contacter</th>
                  </tr>
                </thead>
                <tbody className="">
                  {allusers
                    ?.filter((el) => el.isAdmin != true)
                    .map((el) =>
                     
                        <tr>
                          <td>{el.username}</td>
                          <td>{el.email}</td>
                          

                          <td>
                            <Button
                              onClick={() =>
                                hundelPosted(
                                  el,
                                  el.email,
                                 
                                )
                              }
                              variant="success"
                            >
                              Notifier
                            </Button>
                          </td>
                        </tr>
                      
                    )}
                </tbody>
              </Table>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClienDB;
