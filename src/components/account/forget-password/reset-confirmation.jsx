import React from "react";
import "../account.css";
import { Link } from "react-router-dom";
import vectorLogo from "../../../assets/vector-logo.svg";
import PasswordResetconfirm from "../../../assets/psw-reset-confirm.svg";
import Background from "../../../assets/background-image.webp";

const ResetConfirmationPage = () => {
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
              <div className="ms-5" style={{ marginTop: "15%" }}>
                <img src={PasswordResetconfirm} alt="PasswordResetconfirm" />
              </div>
              <p style={{ fontSize: "19px" }}>New password has been successfully updated</p>
              <p className="mt-5" style={{ fontSize: "16px" }}><Link to="/login" style={{ textDecoration: "none", color: "#1DDA63" }}>Back to Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetConfirmationPage;
