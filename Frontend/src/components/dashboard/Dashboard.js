import React, { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { GetAllUsers } from "../../apis/UserApi";
import "./Dash.css";
import SideBar from "./SideBar";

const Dashboard = () => {
  const [allusers, setAllusers] = useState([]);
  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
  };

  const Count = () => {
    var nbr = 0;

    allusers.filter((el) => {
      if (el.isAdmin != true) {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbruser = Count();

  useEffect(() => {
    isUsers();
  }, []);
  console.log(allusers);
  return (
    <div className="mdd ">
      <SideBar />
      <div className="content-wrapper">
        <section className="content pt-4">
          <div className="container-fluid">
            <div className="row  ">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="fas fa-user-plus" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Tous Utilisateurs</span>
                    <span className="info-box-number">{nbruser}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3"></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Tous Utilisateurs</h3>
                    <div className="card-tools"></div>
                  </div>
{/* modification here */}

                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <ReactHTMLTableToExcel   id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>
                    <table className="table" id="table-to-xls">
                        <thead className="">
                          <tr>
                            <th>Nom</th>
                            <th>Role</th>
                            <th>E-mail</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {allusers
                            .filter((el) => el.isAdmin != true)
                            .map((el) => (
                              <tr>
                                <td>{el.username}</td>
                                <td>
                                  <Badge bg="success">{el.role}</Badge>
                                </td>
                                <td>
                                  <div
                                    className="sparkbar"
                                    data-color="#00a65a"
                                    data-height={20}
                                  >
                                    {el.email}
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                  </div>

{/* finish here */}
                  <div className="card-footer clearfix"></div>
                </div>
              </div>

              <div className="col-md-4"></div>
            </div>
          </div>

         
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
