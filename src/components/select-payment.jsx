import React from "react";
import "./account/account.css";
import upi  from "../assets/upi-icon.svg";
import applePay  from "../assets/apple-pay.svg"
import visa from "../assets/visa-icon.svg";
import cod from "../assets/COD.svg";
import ApiService from "../services/ApiService";
import { toast } from "react-toastify";

const SelectPayment = ({data,setPage}) => {

  const handleSubmit =async () => {
    try {
      var request={};
      request=data;
      var response = await ApiService.placeOrder(request);
      if(response.status===200){
        sessionStorage.clear();
        setPage(8);
      }else{
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <div>

      <h1 className="text-center" style={{ fontSize: '30px', marginTop: '5%' }}>Select payment method</h1>
      <div className="d-flex justify-content-center mt-5">
        <div className="select-payment-card p-5">
          <div className="card-body p-5">
            <div className="row align-items-center justify-content-center mt-5">
              <div className="col-sm-2 text-center">
                <img src={upi} alt="upi" />
              </div>
              <div className="col-sm-8">
                <label className="text-white">
                  Instant and secure mobile-based fund transfers
                </label>
              </div>
              <div className="col-sm-2">
                <input
                  type="radio"
                  id="html"
                  name="payment"
                  value="huey"
                  disabled={true}
                />
              </div>
            </div>
            <hr />
            <div className="row align-items-center justify-content-center mt-5">
              <div className="col-sm-2 text-center">
                <img src={applePay} alt="applePay" />
              </div>
              <div className="col-sm-8">
                <label className="text-white">
                  Secure, contactless payments with your Apple devices.
                </label>
              </div>
              <div className="col-sm-2">
                <input type="radio" disabled={true} id="html" name="payment" value="HTML" />
              </div>
            </div>
            <hr />
            <div className="row align-items-center justify-content-center mt-5">
              <div className="col-sm-2 text-center">
                <img src={visa} alt="visa" />
              </div>
              <div className="col-sm-8">
                <label className="text-white">
                  Widely accepted global payment solution
                </label>
              </div>
              <div className="col-sm-2">
                <input type="radio" disabled={true} id="html" name="payment" value="HTML" />
              </div>
            </div>
            <hr />
            <div className="row align-items-center justify-content-center mt-5">
              <div className="col-sm-2 text-center">
                <img src={cod} alt="cod" />
              </div>
              <div className="col-sm-8">
                <label className="text-white">Cash on delivery</label>
              </div>
              <div className="col-sm-2">
                <input type="radio" checked={true} id="html" name="payment" value="HTML" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3 me-5">
            <button className="payment-continue-btn" onClick={handleSubmit}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPayment;
