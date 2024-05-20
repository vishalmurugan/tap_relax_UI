import React from "react";
import "./delivery-address/delivery-address.css";
import Group417 from "../assets/Group 417 (1).png"
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {

const navigate=useNavigate();

const changePath=()=>{
  navigate('/user/my-cards')
}
  return (
    <div>
        <div className="text-center">
          <img src={Group417} alt="Group417" />
          <div className="payment-sucess-message">
          <h1>Congratulations your order has been placed successfully</h1>
          <p style={{ fontSize: "17px" }}>
            We’ll keep updating you once the product has been dispatched.
            Usually it takes maximum 48 Hours
          </p>
          </div>
        </div>
        <div className="text-center">
        <button className="payment-continue-btn" onClick={changePath}>Go To DashBoard</button>
        </div>
    </div>
  );
};

export default PaymentSuccess;
