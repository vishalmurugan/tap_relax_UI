import React from "react";
import "./account/account.css";
import PersonImage  from "../assets/Person-img.svg";
import companyIcon from "../assets/Company_icon.svg";

const NameCard = ({setPage,name}) => {


  return (
    <div>
      <h1 className="text-center mt-5" style={{ fontSize: '30px', marginTop: '30%' }}>Select which name to be printed in card</h1>
      <div className="d-flex justify-content-center mt-5">
        <div className="select-payment-card p-5">
          <div className="card-body p-5">
            <div className="row align-items-center mt-5 select-payment-card-content">
              <div className="col">
                <img
                  src={PersonImage}
                  alt="PersonImage"
                  className="payment-card-image"
                />
                <span className="payment-card-text">{name}</span>
              </div>
              <div className="col text-end">
                <input
                  type="radio"
                  id="html"
                  name="payment"
                  value="huey"
                  checked={true}
                />
              </div>
            </div>
            <hr />
            <div className="row align-items-center justify-content-center mt-5">
              <div className="col">
                <img
                  src={companyIcon}
                  alt="companyIcon"
                  className="payment-card-image"
                />
                <span className="payment-card-text">Trx sportz</span>
              </div>
              <div className="col text-end">
                <input type="radio" id="html" disabled={true} name="payment" value="HTML" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3 me-5">
          <button className="payment-back-btn me-5" onClick={()=>setPage(4)}>Back</button>
            <button className="payment-continue-btn" onClick={()=>setPage(5)}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
