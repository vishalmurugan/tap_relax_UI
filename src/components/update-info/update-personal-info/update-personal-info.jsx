import React from "react";
import "../update.css";
import bgPattern from "../../../assets/bg-plain-pattern.svg";
import Group433 from "../../../assets/Person-img.svg";
import companyIcon from "../../../assets/Company_icon.svg";
import moneyIcon from "../../../assets/Paper-money.svg";
import { Link } from "react-router-dom";

const UpdatePersonalInfo = ({setPage,setSkip,type}) => {

  const changeSkip=()=>{
    setSkip(true);
    setPage(5);
  }

  return (
    <div className="d-flex justify-content-center" style={{marginTop:'10%'}}>
      <div className="update-container">
        
        <div className="personal-info-text-container">
          <h3 className="text-center" style={{ fontSize: "30px" }}>Update {type===0?'your':'Company'} information</h3>
          <p className="text-center" style={{ fontSize: "17px" }}>Demo content</p>
        </div>
        <div className="d-flex justify-content-center mt-5 update-your-info-container">
          <div className="row pt-5">
           {type===0 && <div className="col">
              <div className="personal-info-card text-center">
                <div className="card-body mt-5">
                  <img src={Group433} style={{ width: "89px", height: "113px" }} alt="Group433" />
                  <p className="mt-4"><Link to="/user/info-steps" onClick={()=>setPage(1)} style={{ fontSize: "20px",color: 'white', textDecoration: 'none' }}>1. Personal information</Link></p>
                </div>
              </div>
            </div>}
            <div className="col">
              <div className="personal-info-card text-center">
                <div className="card-body mt-5">
                  <img src={companyIcon} style={{ width: "117px", height: "100px" }} alt="companyIcon" />
                  <p className="mt-5"><Link to="/user/info-steps" onClick={()=>setPage(type===0?1:2)} style={{ fontSize: "20px",color: 'white', textDecoration: 'none' }}>2. Company information</Link></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="personal-info-card text-center">
                <div className="card-body mt-5">
                  <img src={moneyIcon} style={{ width: "128px", height: "101px" }} alt="moneyIcon" />
                  <p className="mt-5"><Link to="/user/info-steps" onClick={()=>setPage(type===0?1:2)} style={{ fontSize: "20px",color: 'white', textDecoration: 'none' }}>3. Payment information</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="text-center mt-5"><Link to="/user/info-steps" onClick={changeSkip} style={{ fontSize: '16px', color: '#1DDA63', textDecoration: 'none' }}>Skip for now</Link></p> */}
      </div>
    </div>
  );
};

export default UpdatePersonalInfo;
