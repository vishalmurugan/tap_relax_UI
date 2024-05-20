import React, { useState } from "react";
import "../account.css";
import { Link, useNavigate } from "react-router-dom";
import vectorLogo from "../../../assets/vector-logo.svg";
import Background from "../../../assets/background-image.webp";
import { validate } from "../../../services/ValidationService";
import * as Yup from 'yup';
import passwordIcon from "../../../assets/password-icon.svg"
import ApiService from "../../../services/ApiService";
import { toast } from 'react-toastify';
import showPassword from "../../../assets/show-password-icon.svg";

const OTPVerifiedPage = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const setNewPasswordFields = [
    { name: 'password', validation: Yup.string().required() },
	  { name: 'confirm_password', validation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords not match') }
  ];

  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    const Errors = await validate({ [name]: value }, setNewPasswordFields);
    setError({ ...error, [name]: Errors[name] });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const Errors = await validate(data, setNewPasswordFields);
    setError(Errors);

    if(!Object.keys(Errors).length){
      var request={};
      request.password=data.password;
      request.userId=sessionStorage.getItem('userId');
      request.isVerified=true;
      var response = await ApiService.forgotPassword(request);
      if(response.status===200){
        sessionStorage.clear();
        toast.success(response.data.message);
        navigate("/reset-confirmation");
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
                OTP Verified
              </p>
              <p style={{ fontSize: "16px" }}>Set new password</p>
              <form style={{ marginTop: "15%" }}>
                <div className="form-group mt-5">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span>
                      <img src={passwordIcon} alt="passwordIcon" />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control text-center"
                      id="password"
                      name="password"
                      placeholder="Enter new password"
                      onChange={handleChange}
                      value={data.password ? data.password : ''}
                    />
                  </div>
                </div>
                {error && error.password && <h4 className="text-danger text-capitalize">{error.password}</h4>}
                <div className="form-group mt-5">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span>
                      <img src={passwordIcon} alt="passwordIcon" />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control text-center"
                      id="confirm_password"
                      name="confirm_password"
                      placeholder="Re-enter password"
                      onChange={handleChange}
                      value={data.confirm_password ? data.confirm_password : ''}
                    />
                  </div>
                </div>
                {error && error.confirm_password && <h4 className="text-danger text-capitalize">{error.confirm_password}</h4>}
              <p className="text-right me-5">
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
              <button type="submit" className="btn-login" onClick={handleSubmit}>
                Generate
              </button>
              </form>
              <p style={{ fontSize: "16px", color: "#1DDA63" }} className="mt-5">
                New here ? <Link to="/register" style={{ textDecoration: "none", color: "#1DDA63" }}>Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPVerifiedPage;
