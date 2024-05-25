import React, { useState } from "react";
import * as Yup from 'yup';
import "../account.css";
import { Link, useNavigate } from "react-router-dom";
import vectorLogo from "../../../assets/vector-logo.svg";
import Background from "../../../assets/background-image.webp";
import { validate } from "../../../services/ValidationService";
import personFillIcon from "../../../assets/person-filled-icon.svg"
import ApiService from "../../../services/ApiService";
import { toast } from 'react-toastify';

const ResetVerificationCodePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const resetVerificationFields = [
    { name: 'otp', validation: Yup.string().min(4).max(4).required() }
  ]

  /** 
	* To handle input fields change function
	* @e - we capture the input fields events
	**/
  const handleChange=async(e)=>{
	  e.preventDefault();
	  const {name,value}=e.target;  
	  setData({...data,[name]:value});
	  const Errors = await validate({ [name]: value }, resetVerificationFields);
	  setError({...error,[name]:Errors[name]});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const Errors = await validate(data, resetVerificationFields);
    setError(Errors);
    if(!Object.keys(Errors).length){
     var request={};
     request=data;
     request.userId=sessionStorage.getItem('userId');
      var response = await ApiService.otpVerification(request);
      if(response.status===200){
        //sessionStorage.clear();
        toast.success(response.data.message);
        navigate("/reset-password");
      }else{
        toast.error(response.data.error);
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
              <p className="mt-5" style={{ fontSize: "19px" }}>Enter verification code</p>
              <p style={{ fontSize: "16px" }}>we've sent registration code in your mail id</p>
              <form onSubmit={handleSubmit} autoComplete="off" style={{ marginTop: "15%" }}>
                <div class="form-group mt-5">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span>
                        <img src={personFillIcon} alt="personFillIcon" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control text-center"
                      placeholder="Enter 4 Digit verification code"
                      onChange={handleChange}
                      value={data.otp ? data.otp : ''}
                      name="otp"
                    />
                  </div>
                </div>
                {error && error.otp && <h4 className="text-danger text-capitalize">{error.otp}</h4>}
              
              <button type="submit" className="btn-login">Verify code</button>
              </form>
              {/* <p style={{ fontSize: "16px" }} className="mt-5"><Link to="" style={{ textDecoration: "none", color: "#1DDA63" }}>Resend code</Link></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetVerificationCodePage;
