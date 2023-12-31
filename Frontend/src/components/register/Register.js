import React, { useEffect, useState } from "react";
import './Register.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
import { GetAllUsers } from "../../apis/UserApi";
import "./Register.css"

const Register = () => {
  const [allusers,setAllusers]= useState([]);
  const navigate = useNavigate();

  const [user, setUser]= useState({
    username : "",
    email : "",
    password : "",
    gender : "",
  
  });
  
  //Handle Input
  const handleInput = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user,[name]:value});
  }
  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
  };

  //Handel Submit
  const handleSubmit = async ()=>{
  
    
    const config = {headers: {"Content-Type": "application/json"},}
    try {
     
      const res = await axios.post('/api/user/register', user,config)

      if (res.status === 400 || !res ){
        window.alert("Already Used Details");
      }else{
        
        window.alert("Registered Successfully");
        try {
          const res = await axios.post("/api/user/login", user, config);
          const getAdmin=localStorage.getItem("isAdmin");
          localStorage.setItem("token", res.data.token);
          res.data.searchedUser.isAdmin && localStorage.setItem("isAdmin", res.data.searchedUser.isAdmin);
          console.log(res.data.searchedUser);
          if (res.data.searchedUser.role === "Citoyen") {
            localStorage.setItem("isCitoyen", res.data.searchedUser.role);
            navigate("/");
            window.location.reload();
          }
         
    
          if (res.data.searchedUser.isAdmin.toString()=="true" ) {
            navigate("/dashboard");
            window.location.reload();
          }
        } catch (error) {
          const { errors, msg } = error.response.data;
          if (Array.isArray(errors)) {
            errors.map((el) => alert(el.msg));
          }
          if (msg) {
            alert(msg);
          }
    
          console.log(error);
        }
        // navigate('/login')
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  //Handle Login
  // const handleLog = async (event) => {
  //   event.preventDefault();
  //   const config = { headers: { "Content-Type": "application/json" } };

  //   // const {email, password}= user;
  //   try {
  //     const res = await axios.post("/api/user/login", user, config);
  //     const getAdmin=localStorage.getItem("isAdmin");
  //     localStorage.setItem("token", res.data.token);
  //     res.data.searchedUser.isAdmin && localStorage.setItem("isAdmin", res.data.searchedUser.isAdmin);
  //     console.log(res.data.searchedUser);
  //     if (res.data.searchedUser.role === "patient") {
  //       localStorage.setItem("isPatient", res.data.searchedUser.role);
  //       navigate("/");
  //       window.location.reload();
  //     }
     

  //     if (res.data.searchedUser.isAdmin.toString()=="true" ) {
  //       navigate("/dashboard");
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     const { errors, msg } = error.response.data;
  //     if (Array.isArray(errors)) {
  //       errors.map((el) => alert(el.msg));
  //     }
  //     if (msg) {
  //       alert(msg);
  //     }

  //     console.log(error);
  //   }
  // };




  const handelCheck = (e) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const pwdFilter = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
    
      
    
    e.preventDefault();
 
      
    if (!user.username || !user.email|| !user.password || !user.gender) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'Please check your informations !'
      })
      
    }else  if (regEx.test(user.email) && pwdFilter.test(user.password)) {
      handleSubmit();

      
    }
    else if (!pwdFilter.test(user.password) && user.password !==""){
      window.alert(" Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
    }
    
     else if (!regEx.test(user.email) && user.email !== "") {
      window.alert("Email is Not Valid");
    }
    
  }

  useEffect(()=>{
    isUsers();
    
  },[])


  return (
    <div className="mddt">
      <div className="container shadow my-5">
        <div className="row justify-content-center">
          <div
            className="col-md-5 d-flex flex-column
                 align-items-center text-white justify-content-center fori order-2"
          >
            <h1 className="display-4 fw-bolder">Bonjour , Ami</h1>
            <p className="lead text-center">Entrez vos coordonnées pour vous inscrire</p>
            <h5 className="mb-4">OU</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50 text-black"
            >
              Connexion
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            

            <form >
              <div class="mb-3">
                <label for="name" class="form-label">
                  Nom
                </label>
                <input
                  placeholder="nom"
                  type="text"
                  class="form-control"
                  id="name"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  
                />
                
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  address E-mail 
                </label>
                <input
                  placeholder="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" >
                  Mot de passe
                </label>
                <input
               
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput }  
                />
              </div>
              <div  >
              <label for="InputRole" class="form-label" >
                  Sexe
                  </label>
               <select class="form-control"   onChange={handleInput } name="gender" >
                 <option>--SELECTER--</option>
                 <option  value="Homme">Homme</option>
                 <option  value="Femme">Femme</option>
               </select>

              </div>

              <br/>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                J'accepte les conditions générales
                </label>
              </div>


              <button onClick={handelCheck} type="button" class="btn btn-primary w-100 mt-4 rounded-pill">
                Registre
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
