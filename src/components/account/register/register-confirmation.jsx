import React from "react";
import "../account.css";
import vectorLogo from "../../../assets/vector-logo.svg";
import Background from "../../../assets/background-image.webp";
import registerConfirm from "../../../assets/register-confirm.svg";
import { Link } from "react-router-dom";

const RegisterConfirmationPage = () => {
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
          <div className="login-card text-center p-5">
            <div className="card-body">
              <img
                src={vectorLogo}
                alt="vectorLogo"
                className="logo"
                style={{ marginTop: "10%" }}
              />
              <div style={{ marginTop: "25%"}}>
              <img src={registerConfirm} alt="registerConfirm" />
              </div>
              <p className="mt-5" style={{ fontSize: "19px" }}>
                Your account has been created successfully
              </p>
              <Link to="/login" style={{ fontSize: "16px", color: '#1DDA63',cursor:'pointer' }}>
                Click Here To Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterConfirmationPage;
