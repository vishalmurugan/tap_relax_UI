import React from "react";
import Vector from "../../assets/vector-logo.svg";
import './mobile-screen.css';
import instagramIcon from "../../assets/instagram-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import twitterIcon from "../../assets/x-icon.svg";
import linkedin from "../../assets/linkedin-icon.svg";
import youtube from "../../assets/youtube-icon.svg";
import pinterest from "../../assets/pintrest-icon.svg";
import phonecolorIcon from "../../assets/phone-fill-color-icon.svg";
import emailcolorIcon from "../../assets/email-fill-color-icon.svg";
import linkcolorIcon from "../../assets/link-fill-color-icon.svg";
import locationcolorIcon from "../../assets/location-fill-color-icon.svg";
import Accordion from 'react-bootstrap/Accordion';
import trxSport from "../../assets/TRX Sportz.svg";
import instafillIcon from "../../assets/instgram_icn 1.svg";
import facebookfillIcon from "../../assets/facebook-fill-icon.svg";
import twitterfillIcon from "../../assets/twitter 1.svg";
import linkdinfillIcon from "../../assets/linkdin-fill-icon.svg";

const ProfileInfo = () => {
    return (
        <div className="bg-white p-5">
            <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
                <div className="text-center d-flex justify-content-center text-black mt-5 bg-white align-items-center" style={{ marginBottom: '30%' }}>
                    <img src={Vector} alt="Vector" className="bg-white" style={{ height: '25px' }} />
                    <p className="share-info-text-title bg-white">TAPRELAX</p>
                </div>
                <div className="bg-white" style={{ marginTop: '30%' }}>
                    <div className="card mt-5 p-5" style={{ background: 'linear-gradient(to right, #DCDCDC, #F8F8F8)', borderRadius: '10px', border: '1px solid #DCDCDC' }}>
                    <div className="share-info-rounded-image"></div>
                        <div className="card-body text-center bg-transparent">
                            <h2 className="bg-transparent">Would you like to share</h2>
                            <h2 className="bg-transparent">Your info back with Samul</h2>
                        </div>
                    </div>
                </div>
                <div className="mt-5 d-flex justify-content-center bg-white">
                    <button type="button" className="contact-btn me-5">Exchage contact</button>
                    <button type="button" className="contact-btn">save contact</button>
                </div>
                <div className="mt-5 d-flex justify-content-center bg-white">
                    <button type="button" className="Get-card-btn">Get your card</button>
                </div>
                <h2 className="bg-white text-dark mt-5">Social links</h2>
                <div className="row mt-5">
                    <div className="col bg-white"><img src={instagramIcon} alt="instagramIcon" className="bg-white" />
                        <p className="bg-white text-dark">Instagram</p></div>
                    <div className="col bg-white"><img src={facebookIcon} alt="facebookIcon" className="bg-white" />
                        <p className="bg-white text-dark">Facebook</p></div>
                    <div className="col bg-white"><img src={twitterIcon} alt="twitterIcon" className="bg-white" style={{ height: '45px', width: '40px' }} />
                        <p className="bg-white text-dark">Twitter</p></div>
                    <div className="col bg-white"><img src={linkedin} alt="linkedin" className="bg-white" style={{ height: '45px', width: '40px' }} />
                        <p className="bg-white text-dark">Linkedin</p></div>
                </div>
                <div className="row mt-5">
                    <div className="col bg-white"><img src={youtube} alt="youtube" className="bg-white" style={{ height: '45px', width: '40px' }} />
                        <p className="bg-white text-dark">Youtube</p></div>
                    <div className="col-9 bg-white"><img src={pinterest} alt="pinterest" className="bg-white" />
                        <p className="bg-white text-dark">Pinterest</p></div>
                </div>
                <h2 className="bg-white mt-5 text-black">Contact info</h2>
                <div className="contact-info-card p-3 mt-4">
                    <div className="row d-flex align-items-center bg-transparent">
                        <div className="col-1 bg-transparent">
                            <img src={phonecolorIcon} alt="phonecolorIcon" className="bg-transparent" />
                        </div>
                        <div className="col bg-transparent ms-3">
                            <span className="bg-transparent text-dark">Phone numbers</span><br />
                            <span className="bg-transparent text-dark">+91 9689-856848</span>
                        </div>
                    </div>
                </div>
                <div className="contact-info-card p-3 mt-2">
                    <div className="row d-flex align-items-center bg-transparent">
                        <div className="col-1 bg-transparent">
                            <img src={emailcolorIcon} alt="emailcolorIcon" className="bg-transparent" />
                        </div>
                        <div className="col bg-transparent ms-3">
                            <span className="bg-transparent text-dark">Mail id</span><br />
                            <span className="bg-transparent text-dark">samuel@trx.com</span>
                        </div>
                    </div>
                </div>
                <div className="contact-info-card p-3 mt-2">
                    <div className="row d-flex align-items-center bg-transparent">
                        <div className="col-1 bg-transparent">
                            <img src={linkcolorIcon} alt="linkcolorIcon" className="bg-transparent" />
                        </div>
                        <div className="col bg-transparent ms-3">
                            <span className="bg-transparent text-dark">Website</span><br />
                            <span className="bg-transparent text-dark">www.trxsportz.com</span>
                        </div>
                    </div>
                </div>
                <div className="contact-info-card p-3 mt-2">
                    <div className="row d-flex align-items-center bg-transparent">
                        <div className="col-1 bg-transparent">
                            <img src={locationcolorIcon} alt="locationcolorIcon" className="bg-transparent" />
                        </div>
                        <div className="col bg-transparent ms-3">
                            <span className="bg-transparent text-dark">Location</span><br />
                            <span className="bg-transparent text-dark">www.trxsportz.com</span>
                        </div>
                    </div>
                </div>
                <div className="mt-5 bg-white">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Company Details</Accordion.Header>
                            <Accordion.Body>
                                <div className="text-center mt-5">
                                    <img src={trxSport} alt="trxSport" />
                                </div>
                                <h2 className="mt-3 mb-5">Contact Info</h2>
                                <div className="row d-flex align-items-center bg-transparent mt-3">
                                    <div className="col-1 bg-transparent">
                                        <img src={phonecolorIcon} alt="phonecolorIcon" className="bg-transparent accordition-img" />
                                    </div>
                                    <div className="col bg-transparent ms-3">
                                        <span className="bg-transparent text-white">+91 9689-856848</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="row d-flex align-items-center bg-transparent">
                                    <div className="col-1 bg-transparent">
                                        <img src={linkcolorIcon} alt="linkcolorIcon" className="bg-transparent accordition-img" />
                                    </div>
                                    <div className="col bg-transparent ms-3">
                                        <span className="bg-transparent text-white">www.trxsportz.com</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="row d-flex align-items-center bg-transparent">
                                    <div className="col-1 bg-transparent">
                                        <img src={emailcolorIcon} alt="emailcolorIcon" className="bg-transparent accordition-img" />
                                    </div>
                                    <div className="col bg-transparent ms-3">
                                        <span className="bg-transparent text-white">samuel@trx.com</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="row d-flex align-items-center bg-transparent">
                                    <div className="col-1 bg-transparent">
                                        <img src={locationcolorIcon} alt="locationcolorIcon" className="bg-transparent accordition-img" />
                                    </div>
                                    <div className="col bg-transparent ms-3">
                                        <span className="bg-transparent text-white">www.trxsportz.com</span>
                                    </div>
                                </div>
                                <h2 className="mt-5">Social network</h2>
                                <div className="row mt-5">
                                    <div className="col">
                                        <img src={instafillIcon} alt="instafillIcon" />
                                        <p style={{ fontSize: '12px' }}>Instagram</p>
                                    </div>
                                    <div className="col">
                                        <img src={facebookfillIcon} alt="facebookfillIcon" />
                                        <p style={{ fontSize: '12px' }}>Facebook</p>
                                    </div>
                                    <div className="col">
                                        <img src={twitterfillIcon} alt="twitterfillIcon" />
                                        <p className="ms-2" style={{ fontSize: '12px' }}>Twitter</p>
                                    </div>
                                    <div className="col">
                                        <img src={linkdinfillIcon} alt="linkdinfillIcon" />
                                        <p style={{ fontSize: '12px' }}>Linkedin</p>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;