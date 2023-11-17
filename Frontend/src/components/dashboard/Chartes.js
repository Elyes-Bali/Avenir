import React, { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { GetAllUsers } from "../../apis/UserApi";
import "./Dash.css"
import { Doughnut } from "react-chartjs-2";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import SideBar from "./SideBar";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Chartes = () => {
  const [allusers, setAllusers] = useState([]);
  const [allchildern, setAllchildren] = useState([]);

  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
    // allchildern.push(allusers.map((el)=>el.children.map((item)=>item)))
  };


  const Count = () => {
var nbr =0;
    allusers.filter((el) => {
      if (el.isAdmin != true) {
        nbr += 1;
      }
    });
   
    return nbr;
  };
  const nbruser = Count();

  const all = () => {
    var nbr = 0;

    allusers.filter((el) => {
      if (el.isAdmin != true) {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbruserss = all();

  const boys = () => {
    var nbr = 0;

    allusers.filter((el) => {
      if (el.gender == "Homme") {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrboys = boys();

  const girls = () => {
    var nbr = 0;

    allusers.filter((el) => {
      if (el.gender == "Femme") {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrgirls = girls();

 






  console.log(nbruser);
  useEffect(() => {
    isUsers();

  }, [allusers.length]);
  console.log(allusers);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${nbruserss} Utilisateurs disponibles`,
      },
    },
  };

  const data = {
    labels: ["Femme", "Homme"],
    datasets: [
      {
        label: `Utilisateurs disponibles`,
        data: [nbrgirls, nbrboys],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

 

  console.log(allusers);
  return (
    <div className="sdee">
      <SideBar />
      
      <div className="scrumban offset-md-2 col-md-10">
        
        <div className="card col-md-4 w-hover-shadow">
          <div className="card-header">
          
          </div>
          <div className="card-body">
            <div className="">
            <ReactHTMLTableToExcel   id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>
                    <table id="table-to-xls" className="table">
              <tbody>
                <tr>
                  <td></td>
              <Doughnut data={data} options={options} />
             </tr>
             </tbody>
             </table>
            </div>
          </div>
        </div>
       
      </div>
      </div>
  );
};

export default Chartes;
