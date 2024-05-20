import React from "react";
import "../../delivery-address/delivery-address.css";
import AppNavBar from "../../layout/app-navbar/app-navbar";
import bgPattern from "../../../assets/bg-plain-pattern.svg";
import companyIcon from "../../../assets/Company_icon.svg";
import moneyIcon from "../../../assets/Paper-money.svg";
import { Link } from "react-router-dom";

const UpdateCompanyInfo = () => {
  return (
    <div>
      <AppNavBar />
      <div className="update-container">
        <div style={{ textAlign: "right" }}>
          <img
            src={bgPattern}
            alt="bgPattern"
            className="group-image"
          />
        </div>
        <div className="company-info-text-container">
          <h3 className="text-center" style={{ fontSize: "30px" }}>
            Update company information
          </h3>
          <p className="text-center" style={{ fontSize: "17px"}}>Demo content</p>
        </div>
        <div className="d-flex justify-content-center mt-5 update-company-info-container">
          <div class="row">
            <div class="col-sm-6">
              <div class="personal-info-card text-center">
                <div class="card-body mt-5">
                  <img
                    src={companyIcon}
                    style={{ width: "117px", height: "100px" }}
                    alt="companyIcon"
                  />
                  <p className="mt-5" style={{ fontSize: "20px" }}>
                    1. Company information
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="personal-info-card text-center">
                <div class="card-body mt-5">
                  <img
                    src={moneyIcon}
                    style={{ width: "128px", height: "101px" }}
                    alt="moneyIcon"
                  />
                  <p className="mt-5" style={{ fontSize: "20px" }}>
                    2. Payment information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-5"><Link to="/delivery-address" style={{ fontSize: '16px', color: '#1DDA63', textDecoration: 'none' }}>Skip for now</Link></p>
      </div>
    </div>
  );
};

export default UpdateCompanyInfo;
