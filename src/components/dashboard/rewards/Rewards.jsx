import React from "react";
import "../dashboard.css";
import WalletImage from "../../../assets/wallet.svg";

const Rewards = () => {
  return (
    <div>
      <h1 className="dashboard-title-text">Rewards</h1>
      <div className="rewards-card-container">
      <div className="rewards-card mt-5 p-5">
        <div className="">
          <div className="row align-items-center">
            <div className="col">
              <img src={WalletImage} alt="WalletImage" />
            </div>
            <div className="col-4">
              <h4 style={{ fontSize: '20px' }}>My rewards</h4>
              <span style={{ fontSize:'17px' }}>300 points</span>
            </div>
            <div className="col-5">
              <button className="redeem-button">Redeem</button>
            </div>
          </div>

        </div>
        <div style={{ marginTop: '35%' }}>
          <hr className="horizontal-line" />
          <p className="mt-5 text-secondary ms-5" style={{ fontSize: '16px' }}>Refer and get more reward points and easily convert into cash</p>
          <div className="text-right mt-5">
            <button className="refer-button mt-5">Refer</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Rewards;
