import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";
import { ApplyOff, CurrentUser } from "../../apis/UserApi";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export const Product = ({ ping, setPing }) => {
  const [user, setUser] = useState({
    topic: "",
    description: "",
    date :  new Date().toISOString().split('T')[0]
  
  });
  const[parent,setParent]=useState({});

  const navigate = useNavigate();
  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setParent(userLg.data.user);
  };

  
  useEffect(() => {
    isLoggedIn();
  }, []);
  console.log(user);
  console.log(parent);



  const hundelUpdate = async () => {
    ApplyOff(parent._id,user)
    // const config = { headers: { "Content-Type": "application/json" } };
    // const res = await axios.put(`/api/user/update/${user._id}`, user, config);
    setPing(!ping);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your data has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/');
    
  };

  return (
    <div className="backk mdd">
      <div className="container shadow my-5 frr">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column
               align-items-center text-white justify-content-center foss order-2"
          >
            <h1 className="display-4 fw-bolder text-white">Hello <i class="fa fa-smile-o" aria-hidden="true"/></h1><br/>
            <p className="lead text-center fw-bolder text-white idea">
              Share Your Thoughts <br/>
              With Us
            </p><br/>
           
          </div>
          <div className="col-md-7 p-5 clr">
            <form>
              <div class="mb-3 ">
                <label for="topic" class="form-label">
                  Topic :
                </label>
                <input
                  placeholder="topic"
                  type="text"
                  class="form-control"
                  value={user?.topic}
                  onChange={(e) =>
                    setUser({ ...user, topic: e.target.value })}
                />
              </div>

             

             

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                Description :
                </label>
                <textarea
                rows="6"
                  cols="80"
                 placeholder="Description"
                  type="text"
                  class="form-control"
                  value={user?.description}
                  onChange={(e) =>
                    setUser({ ...user, description: e.target.value })}
                />
              </div>

           

              <br />
            

              <button
                type="button"
                class="btn btn-danger w-100 mt-4 rounded-pill"
                onClick={hundelUpdate}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
