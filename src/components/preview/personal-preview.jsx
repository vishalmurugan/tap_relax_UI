import React, { useState } from "react";
import "./preview.css";
import companyIcon from "../../assets/Company_icon.svg"
import moneyICon from "../../assets/Paper-money.svg";
import PersonImage from "../../assets/Person-img.svg";
import { useNavigate } from "react-router-dom";
import instagramIcon from "../../assets/instagram-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import userIcon from "../../assets/person-filled-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import webIcon from "../../assets/Web-icon.svg";
import thumbIcon from "../../assets/thumb-icon.svg";

const PersonalPreviewView = ({data,setPage,name,type}) => {

    const { personal_details,company_details,payment_details} = data;

    return (
        <div>
            <div className="company-preview-text-container">
                <h2 className="text-center" style={{ fontSize: '30px' }}>Preview</h2>
                <p className="text-center" style={{ fontSize: '16px' }}>Demo content</p>
            </div>
            <div className="d-flex justify-content-center mt-5">
            <div
                className="rounded-circle overflow-hidden bg-white"
                style={{ width: "100px", height: "100px", position:'absolute', marginTop: '-1%' }}
            >
                <img src={process.env.REACT_APP_SERVERURL+'default.svg'} alt="selectedImage" className="bg-white" />
            </div>
                <div className="company-preview-card p-5">
                    <p className="text-center" style={{ fontSize: '20px' }}>&nbsp;</p>
                    <p className="text-center text-capitalize" style={{ fontSize: '20px' }}>{name}</p>
                    {/* <p className="text-center" style={{ fontSize: '16px', color: '#727272' }}>Hi, I’m samuel running a sports fashion accessories business</p> */}
                    <div className="company-card-body">
                       {type===0 &&<div className="personal-info-part mt-5" style={{ fontSize: '16px' }}>
                            <p><img src={PersonImage} alt="PersonImage" style={{ width: '40px', height: '50px' }} className="me-4" />Personal Information</p>
                            <div style={{ marginLeft: '10%' }}>
                                <div className="row mt-5">
                                    <div className="col">
                                        <p><span><img src={userIcon} alt="userIcon" className="me-3" /></span>Contact number</p>
                                        <p className="ms-5">{ personal_details.mobile_number }</p>
                                    </div>
                                    
                                    <div className="col">
                                        <p><span><img src={emailIcon} alt="emailIcon" className="me-3" /></span>Emails</p>
                                        <p className="ms-5">{ personal_details.email }</p>
                                    </div>
                                    <div className="col">
                                        <p><span> <img src={thumbIcon} alt="thumbIcon" className="me-3" /></span>Social media</p>
                                        {personal_details.social_media.map((item,i)=>(
                                             <p className="ms-5" key={i}> <img src={'/icons/'+item.image} alt="instagramIcon" style={{ height:'25px', width: '25px' }} />{item.url}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <p><span><img src={locationIcon} alt="locationIcon" className="me-3" /></span>Address</p>
                                    <p className="ms-5">{ personal_details.address }</p>
                                </div>
                            </div>
                        </div>}
                        <hr className="mt-5" />

                        <div className="company-info-part mt-5" style={{ fontSize: '16px' }}>
                            <p><img src={companyIcon} alt="companyIcon" style={{ width: '40px', height: '40px' }} className="me-4" />Company Information</p>
                            <div style={{ marginLeft: '10%' }}>
                                <div className="row mt-5">
                                    <div className="col">
                                        <p><span>
                                        <img src={userIcon} alt="userIcon" className="me-3" /></span>Contact number</p>
                                        <p className="ms-5">{ company_details.mobile_number }</p>
                                    </div>
                                    <div className="col">
                                        <p><span><img src={emailIcon} alt="emailIcon" className="me-3" /></span>Emails</p>
                                        <p className="ms-5">{ company_details.email }</p>
                                    </div>
                                    <div className="col">
                                    
                                        <p><span><img src={thumbIcon} alt="thumbIcon" className="me-3" /></span>Social media</p>
                                        {company_details.social_media.map((item,i)=>(
                                             <p className="ms-5" key={i}> <img src={'/icons/'+item.image} alt="instagramIcon" style={{ height:'25px', width: '25px' }} />{item.url}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col">
                                        <p><span> <img src={webIcon} alt="webIcon" className="me-3" /></span>Website</p>
                                        <p className="ms-5">{ company_details.web_address }</p>
                                    </div>
                                    <div className="col-md-8">
                                        <p><span><img src={locationIcon} alt="locationIcon" className="me-3" /></span>Address</p>
                                        <p className="ms-5">{ company_details.address }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-5" />

                        <div className="payment-info-part mt-5" style={{ fontSize: '16px' }}>
                            <p><img src={moneyICon} alt="moneyICon" style={{ width: '40px', height: '40px' }} className="me-4" />Payment Information</p>
                            <div className="mt-5" style={{ marginLeft: '10%' }}>
                                <p><span> <img src={webIcon} alt="webIcon" className="me-3" /> </span>Payment</p>
                                {payment_details?.payment_links.length !==0 && payment_details.payment_links.map(item=>(<><p className="ms-5">{item}</p><br /></>))}
                            </div>
                        </div>
                    </div>
                    <div className="text-right company-perview-buton-container mt-5">
                        <button className="Preview-Back-Btn me-5"  type="button" onClick={()=>setPage(3)}>Back</button>
                        <button className="Preview-Next-Btn" onClick={()=>setPage(9)}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalPreviewView;