import React, { useEffect, useContext,useState } from "react";
import "../delivery-address/delivery-address.css";
import AppNavBar from "../layout/app-navbar/app-navbar";
import bgPattern from "../../assets/bg-plain-pattern.svg";
import PersonalInformation from "../personal/personal-information";
import PersonalCompanyInformation from "../personal/personal-company-info";
import PersonalPaymentInformation from "../personal/personal-payment-info";
import DeliveryInformation from '../delivery-address/delivery-address';
import PreviewForm from '../preview/personal-preview';
import paymentIcon from "../../assets/Paper-money.svg";
import personColor from "../../assets/Person-img.svg";
import companyIcon from "../../assets/Company_icon.svg";
import TotalOrder from '../order-total';
import SelectPayment from '../select-payment';
import PaymentSuccess from "../payment-sucess";
import UpdatePersonalInfo from "../update-info/update-personal-info/update-personal-info";
import NameCard from "../name-card";
import GlobalStore from "../../Store";

const PersonalInformationSharedComponent = () => {
  const [step, setStep] = useState(0);
  const [personal_details, setPersonalData] = useState({photo:'default.svg',social_media:[]});
  const [company_details, setCompanyData] = useState({photo:'default.svg',social_media:[]});
  const [payment_details, setPaymentData] = useState({payment_links:[]});
  const [delivery_details, setDelivery] = useState({});
  const [order_details, setOrder] = useState({});
  const [isSkip,setSkip]=useState(false);
  const {getProfile,getSocialMedia}= useContext(GlobalStore);

  useEffect(()=>{
    var carddetails= sessionStorage.getItem('card');
    if(carddetails){
      carddetails=JSON.parse(carddetails);
      var obj={};
      obj.cardType=carddetails.type==='pvc'?0:1;
      obj.price=obj.cardType===0?645:980;
      obj.quantity=1;
      obj.card=carddetails.id;
      obj.card_name=getProfile?.username;
      setOrder(obj);
    }

  },[getProfile])

  return (
    <div>
      <AppNavBar />
      <div style={{ textAlign: "right" }}>
        <img src={bgPattern} alt="bgPattern" className="Group430" />
      </div>
      <div className="d-flex justify-content-center align-items-center personal-info-text-container">
        <div>
          {step === 1 &&  <img src={personColor} alt="personColor" style={{ height: '50px', width: '50px' }} /> }
          {step === 2 &&  <img src={companyIcon} alt="companyIcon" style={{ height: '50px', width: '50px' }} /> }
          {step === 3 &&  <img src={paymentIcon} alt="moneyIcon" style={{ height: '50px', width: '50px' }} /> }
        </div>
        <div>
          {step === 1 &&  <h3 className="ms-5" style={{ fontSize: "20px" }}>Personal information</h3> }
          {step === 2 &&  <h3 className="ms-5" style={{ fontSize: "20px" }}>Company information</h3> }
          {step === 3 &&  <h3 className="ms-5" style={{ fontSize: "20px" }}>Payment information</h3> }
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="personal-information-card h-auto p-5" style={{width:step===0?'100%':''}}>
          <div className="card-body" style={{ marginTop: "1%" }}>
          
              {/* Render different components based on the step */}
              {step === 0 && <UpdatePersonalInfo type={order_details.cardType} setPage={setStep} setSkip={setSkip} />}
              {step === 1 && <PersonalInformation setData={setPersonalData} socialMedia={getSocialMedia} data={personal_details} setPage={setStep} />}
              {step === 2 && <PersonalCompanyInformation type={order_details.cardType} setData={setCompanyData} socialMedia={getSocialMedia} data={company_details} setPage={setStep}/>}
              {step === 3 && <PersonalPaymentInformation setData={setPaymentData} data={payment_details} setPage={setStep} />}
              {step === 4 && <PreviewForm  type={order_details.cardType} data={{personal_details,company_details,payment_details}} name={order_details?.card_name} setPage={setStep} />}
              {step === 9 && <NameCard name={order_details?.card_name} setPage={setStep} />}
              {step === 5 && <DeliveryInformation setData={setDelivery} data={delivery_details} setPage={setStep}/>}
              {step === 6 && <TotalOrder setData={setOrder} data={order_details} setPage={setStep}/>}
              {step === 7 && <SelectPayment data={{isSkip,personal_details,company_details,payment_details,order_details,delivery_details}} setPage={setStep}/>}
              {step === 8 && <PaymentSuccess name={order_details?.card_name} setPage={setStep}/>}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationSharedComponent;
