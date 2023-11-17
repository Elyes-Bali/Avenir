import React, { useEffect, useState } from "react";
import { CurrentUser } from "../../apis/UserApi";
import { Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import axios from "axios";
const Children = ({ ping, setPing }) => {
  const [user, setUser] = useState({});

  const hundelUpdate = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/update/${user._id}`, user, config);
    setPing(!ping);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your data has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    Navigate("/");
  };

  const isUsers = async () => {
    const uslg = await CurrentUser();
    setUser(uslg.data.user);
  };

  const handleChange = ({ e, idx }) => {
    const newState = {
      ...user,
      //   update: true,
      ideas: user.ideas.map((item, index) => {
        return idx === index ? { ...item, weight: e.target.value } : item;
      }),
    };
    setUser(newState);
  };
 


  useEffect(() => {
    isUsers();
  }, []);
  console.log(user);
  return (
    <div className="mt-6 col-md-12 mdd">
      <div className="card ">
        <div className="card-header">
          <h5 className="card-title">Mes idées :</h5>
        </div>
        <div className="card-body">
          <Table striped bordered hover>
            <thead className="">
              <tr>
                <th>Idées </th>
                <th>Description</th>
               
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody className="">
              {user &&
                user?.ideas?.map((el, idx) => (
                  <tr key={idx}>
                    <td>{el.topic}</td>
                    <td>
                      {" "}
                      <textarea
                       rows="3"
                       cols="50"
                        type="text"
                        placeholder={user?.ideas[idx]?.description}
                        onChange={(e) => handleChange({ e, idx })}
                      />
                    </td>
                   
                   
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          hundelUpdate();
                          window.location.reload();
                        }}
                      >
                        Update
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>

  
    </div>
  );
};

export default Children;
