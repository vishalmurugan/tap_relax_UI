import React from "react";
import AppNavBar from "./layout/app-navbar/app-navbar";
import "./account/account.css";
import NfcCard from "../assets/NFC Card_tap&relax_Artboard 11 copy 5 1.png"
import { useNavigate } from "react-router-dom";

const OrderTotalPage = ({setPage,data,setData}) => {
  const navigate = useNavigate();

  const next = () => {
    navigate("/select-payment");
  }

  const back = () => {
    navigate("/delivery-address");
  }


  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <h1>Order Total</h1>
        <p style={{ fontSize: "16px" }}>
          Our NFC are always reprogrammable so you can constantly change the
          contents of the chip to your liking.
        </p>
        <p style={{ fontSize: "16px" }}>
          This is the only business essentials you’ll ever need.
        </p>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="order-total-card">
          <div className="card-body">
            <hr style={{ marginTop: "10%" }} />
            <div class="table-responsive bg-transparent" style={{ overflowX: 'hidden'}}>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={NfcCard}
                        alt="nfc-card"
                      /></td>
                    <td>{data.cardType===0?'PVC':'Standee'} card</td>
                    <td>Qty 1</td>
                    <td>Rs {data.cardType===0?'599':'899'} /-</td>
                  </tr>
                
                </tbody>
              </table>
            </div>
            <div className="inner-price-card mt-5">
              <div className="text-right card bg-transparent mt-5">
                <p className="bg-transparent me-5 inner-price-card-text">
                  9% CGST : <span className="bg-transparent">+ {data.cardType===0?'53':'81'}/-</span>
                </p>
                <p className="bg-transparent me-5 inner-price-card-text">
                  9% SGST : <span className="bg-transparent">+ {data.cardType===0?'53':'81'}/-</span>
                </p>
                <p className="bg-transparent me-5 inner-price-card-text">
                  Discount : <span className="me-2 bg-transparent">- {data.cardType===0?'53':'81'}/-</span>
                </p>
                <p className="bg-transparent me-5">
                  TOTAL AMOUNT PAYABLE :
                  <span  style={{ marginLeft: '6%'}} className="bg-transparent">Rs.{data.price}/-</span>
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-5">
            <button className="payment-back-btn mt-5 me-5" onClick={()=>setPage(5)}>Back</button>
            <button className="payment-continue-btn mt-5 me-5" onClick={()=>setPage(7)}>Proceed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTotalPage;
