import React, { useState } from "react";
import "../account.css";
import { Link, useNavigate } from "react-router-dom";
import vectorLogo from "../../../assets/vector-logo.svg";
import Background from "../../../assets/background-image.webp";
import * as Yup from 'yup';
import { validate } from "../../../services/ValidationService";
import ApiService from "../../../services/ApiService";
import { toast } from 'react-toastify';
import emailIcon from "../../../assets/email-icon.svg"

const ForgotPasswordPage = () => {

  const navigate = useNavigate();
  const [data,setData]=useState({});
  const [error,setError]=useState({});

  const forgetPasswordFields = [
      { name: 'email', validation: Yup.string().email().required() }
  ]

  /** 
	* To handle input fields change function
	* @e - we capture the input fields events
	**/
  const handleChange=async(e)=>{
	  e.preventDefault();
	  const {name,value}=e.target;  
	  setData({...data,[name]:value});
	  const Errors = await validate({ [name]: value }, forgetPasswordFields);
	  setError({...error,[name]:Errors[name]});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const Errors = await validate(data, forgetPasswordFields);
    setError(Errors);

    if(!Object.keys(Errors).length){
      data.isVerified=false;
      var response = await ApiService.forgotPassword(data);
      if(response.status===200){
        sessionStorage.setItem('userId',response.data.userId);
        toast.success(response.data.message);
        navigate("/reset-verification");
      }else{
        toast.error(response.data.error)
      }
    }
  };

  return (
    <div>
    <div className="align-items-center">
      <div className="col-md-12">
        <img
          src={Background}
          className="bg-pattern"
          alt="background"
          style={{ height: "100vh", width: "80%", marginLeft: "6%" }}
        />
      </div>
      <div className="col-auto me-5">
        <div className="login-card text-center p-5">
          <div className="card-body">
            <img
              src={vectorLogo}
              alt="vectorLogo"
              className="logo"
              style={{ marginTop: "10%" }}
            />
            <p className="mt-5" style={{ fontSize: "19px" }}>
              Forget password ?
            </p>
            <form onSubmit={handleSubmit} autoComplete="off" style={{ marginTop: "15%" }}>
              <div class="form-group mt-5">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span>
                      <img src={emailIcon} alt="emailIcon" />
                    </span>
                  </div>
                  <input
                    type="email"
                    class="form-control text-center"
                    id="email"
                    name="email" onChange={handleChange}
                    value={data.email?data.email:''}
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              {error && error.email && <h4 className="text-danger text-capitalize">{error.email}</h4>}
            <button  type="submit" className="btn-login">Send recovery OTP</button>
            </form>
            <p style={{ fontSize: "16px", color: "#1DDA63" }} className="mt-5">Remember password ? <Link to="/login" style={{ textDecoration: "none", color: "#1DDA63" }}>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ForgotPasswordPage;
