import React, { useState } from "react";
import "../account.css";
import { Link, useNavigate } from "react-router-dom";
import vectorLogo from "../../../assets/vector-logo.svg";
import Background from "../../../assets/background-image.webp";
import * as Yup from 'yup';
import { validate } from "../../../services/ValidationService";
import personFillIcon from "../../../assets/person-filled-icon.svg";
import phoneIconFilled from "../../../assets/phone-icon-filled.svg";
import passwordIcon from "../../../assets/password-icon.svg";
import ApiService from "../../../services/ApiService";
import { toast } from 'react-toastify';
import showPassword from "../../../assets/show-password-icon.svg";

const RegisterPage = () => {

  const navigate = useNavigate();
  const [data, setData]=useState({});
  const [error, setError]=useState({});
  const [showText,setPassword]=useState(false);

  const registerFields = [
    { name: 'email', validation: Yup.string().required().email() },
    { name: 'mobile_number', validation: Yup.string().required().matches(/^\d{10}$/, 'Phone number must be 10 digits') },
	  { name: 'password', validation: Yup.string().required() },
	  { name: 'username', validation: Yup.string().required() },
	  { name: 'confirm_password', validation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords not match') }
  ]

  /** 
	* To handle input fields change function
	* @e - we capture the input fields events
	**/
  const handleChange=async(e)=>{
	  e.preventDefault();
	  const {name,value}=e.target;  
	  setData({...data,[name]:value});
	  const Errors = await validate({ [name]: value }, registerFields);
	  setError({...error,[name]:Errors[name]});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const Errors = await validate(data, registerFields);
    setError(Errors);

    if(!Object.keys(Errors).length){
     var request={};
     request.email=data.email;
     request.mobile_number=data.mobile_number;
     request.password=data.password;
     request.username=data.username;
      var response = await ApiService.register(request);
      if(response.status===200){
        sessionStorage.setItem('userId',response.data.userId);
        toast.success(response.data.message)
       navigate("/register-verification");
      }else if(response.status===500){
        toast.error('Email already exist')
      }else{
        toast.error('Validation Error');
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
            alt="Background"
            style={{ height: "100vh", width: "80%", marginLeft: "6%" }}
          />
        </div>
        <div className="col-auto me-5">
          <div
            className="register-card h-auto text-center p-5"
          >
            <div className="card-body">
              <img
                src={vectorLogo}
                alt="vectorLogo"
                className="logo"
                style={{ marginTop: "6%" }}
              />
              <p className="mt-5" style={{ fontSize: "19px" }}>
                REGISTER
              </p>
              <form onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group mt-5">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span>
                        <img src={personFillIcon} alt="personFillIcon" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control text-center"
                      id="username"
                      name="username" onChange={handleChange}
                      value={data.username?data.username:''}
                      placeholder="Enter full name"
                    />
                  </div>
                </div>
                {error && error.username && <h4 className="text-danger ">{error.username}</h4>}
                <div className="form-group mt-5">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span>
                        <img src={personFillIcon} alt="personFillIcon" />
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control text-center"
                      id="email"
                      name="email" onChange={handleChange}
                      value={data.email?data.email:''}
                      placeholder="Enter email id"
                    />
                  </div>
                </div>
                {error && error.email && <h4 className="text-danger ">{error.email}</h4>}
                <div className="form-group mt-5">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span>
                        <img src={phoneIconFilled} alt="phoneIconFilled" />
                      </span>
                    </div>
                    <input
                      type="number"
                      className="form-control text-center"
                      placeholder="Enter phone number"
                      onChange={handleChange}
                      value={data.mobile_number ? data.mobile_number : ''}
                      name="mobile_number"
                    />
                  </div>
                </div>
                {error && error.mobile_number && <h4 className="text-danger ">{error.mobile_number}</h4>}
                <div className="form-group mt-5">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span>
                        <img src={passwordIcon} alt="passwordIcon" />
                      </span>
                    </div>
                    <input
                       type={showText?"text":"password"}
                      className="form-control text-center"
                      value={data.password?data.password:''}
                      name="password" onChange={handleChange} 
                      placeholder="Enter new Password"
                    />
                  </div>
                </div>
                {error && error.password && <h4 className="text-danger ">{error.password}</h4>}
                <div className="form-group mt-5">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span>
                        <img src={passwordIcon} alt="passwordIcon" />
                      </span>
                    </div>
                    <input
                      type={showText?"text":"password"}
                      className="form-control text-center"
                      id="reEnterPassword"
                      name="confirm_password"
                      placeholder="Re-enter password"
                      onChange={handleChange}
                      value={data.confirm_password ? data.confirm_password : ''}
                    />
                  </div>
                </div>
                {data?.password !== data?.confirm_password && error && error.confirm_password && <h4 className="text-danger ">{error.confirm_password}</h4>}
             
              <p className="text-right me-5" onClick={()=>setPassword(!showText)}>
                <Link
                  className="me-4"
                  style={{
                    fontSize: "16px",
                    color: "#1DDA63",
                    textDecoration: "none",
                  }}
                 
                >
                  Show Password
                  <span>
                    <img src={showPassword} alt="showPassword" />
                  </span>
                </Link>
              </p>
           
            <button type="submit" className="btn-login my-2">
              Register
            </button>
            <p style={{ fontSize: "16px", color: "#1DDA63" }} className="my-3">
              Already a user ?{" "}
              <Link to="/login" style={{ textDecoration: "none", color: "#1DDA63" }}>
                Login
              </Link>
            </p>
            </form>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
