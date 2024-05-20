import AppNavBar from "../layout/app-navbar/app-navbar";
import React from "react";
import bgPattern from "../../assets/bg-plain-pattern.svg";
import "./preview.css";
import companyIcon from "../../assets/Company_icon.svg";
import moneyICon from "../../assets/Paper-money.svg";
import { useNavigate } from "react-router-dom";
import instagramIcon from "../../assets/instagram-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";

const CompanyPreviewView = () => {

    const navigate = useNavigate();

    const Update = () => {
      navigate("/delivery-address");
    }
  
    const back = () => {
      navigate("/company-step/company-payment-information");
    }

    return (
        <div>
            <AppNavBar />
            <div style={{ textAlign: "right" }}>
                <img src={bgPattern} alt="bgPattern" className="group_image" />
            </div>
            <div className="company-preview-text-container">
                <h2 className="text-center" style={{ fontSize: '30px' }}>Preview</h2>
                <p className="text-center" style={{ fontSize: '16px' }}>Demo content</p>
            </div>
            <div className="d-flex justify-content-center mt-5">
            <div
                className="rounded-circle overflow-hidden bg-white"
                style={{ width: "100px", height: "100px", marginLeft: '-1%', position:'absolute', marginTop: '1%' }}
            >
                <img src="" alt="selectedImage" className="bg-white" />
            </div>
                <div className="company-preview-card p-5">
                    <div className="company-card-body">
                        <div className="company-info-part mt-5" style={{ fontSize: '16px' }}>
                            <p><img src={companyIcon} alt="companyIcon" style={{ width: '40px', height: '40px' }} className="me-4" />Company Information</p>
                            <p className="text-center text-secondary mt-5">TRX is a authorized store for multi brand sports fashion accessories</p>
                            <div style={{ marginLeft: '10%' }}>
                                <div className="row mt-5">
                                    <div className="col">
                                        <p><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-person-fill me-3" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                            </svg></span>Contact number</p>
                                        <p className="ms-5">+91 9689-868998</p>
                                        <p className="ms-5">+91 9689-868998</p>
                                        <p className="ms-5">+91 9689-868998</p>
                                    </div>
                                    <div className="col">
                                        <p><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-envelope-fill me-3" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                            </svg></span>Emails</p>
                                        <p className="ms-5">samuel@Trx.com</p>
                                        <p className="ms-5">samuel@Trx.com</p>
                                    </div>
                                    <div className="col">
                                        <p><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1DDA63" class="bi bi-hand-thumbs-up-fill me-3" viewBox="0 0 16 16">
                                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                            </svg></span>Social media</p>
                                            <p className="ms-5"> <img src={instagramIcon} alt="instagramIcon" style={{ height:'25px', width: '25px' }} /> Samuel_z</p>
                                            <p className="ms-5"> <img src={facebookIcon} alt="facebookIcon" style={{ height:'25px', width: '25px' }} /> Sam_z</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col">
                                        <p><span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-globe-asia-australia me-3" viewBox="0 0 16 16">
                                            <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.48.48 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.6.6 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.45.45 0 0 0 .138-.326M5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.7.7 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52z" />
                                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.88.88 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a7 7 0 0 1 3.425 7.692 1 1 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a1 1 0 0 0 .283.126 7 7 0 0 1-9.49-3.409Z" />
                                        </svg>
                                        </span>Website</p>
                                        <p className="ms-5">www.Trxsportz.com</p>
                                    </div>
                                    <div className="col-md-8">
                                        <p><span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-geo-alt-fill me-3" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                        </svg>
                                        </span>Address</p>
                                        <p className="ms-5">Lane89, RS puram coimbatore-26</p>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <p><span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-globe-asia-australia me-3" viewBox="0 0 16 16">
                                        <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.48.48 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.6.6 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.45.45 0 0 0 .138-.326M5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.7.7 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52z" />
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.88.88 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a7 7 0 0 1 3.425 7.692 1 1 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a1 1 0 0 0 .283.126 7 7 0 0 1-9.49-3.409Z" />
                                    </svg>
                                    </span>Trx sportz world</p>
                                    <p className="ms-5">Google my business link</p>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-5" />

                        <div className="payment-info-part mt-5" style={{ fontSize: '16px' }}>
                            <p><img src={moneyICon} alt="moneyICon" style={{ width: '40px', height: '40px' }} className="me-4" />Payment Information</p>
                            <div className="mt-5" style={{ marginLeft: '10%' }}>
                                <p><span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-globe-asia-australia me-3" viewBox="0 0 16 16">
                                    <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.48.48 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.6.6 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.45.45 0 0 0 .138-.326M5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.7.7 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52z" />
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.88.88 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a7 7 0 0 1 3.425 7.692 1 1 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a1 1 0 0 0 .283.126 7 7 0 0 1-9.49-3.409Z" />
                                </svg>
                                </span>Payment</p>
                                <p className="ms-5">trxz@okaxis</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-right company-perview-buton-container mt-5">
                        <button className="Preview-Back-Btn me-5" onClick={back}>Back</button>
                        <button className="Preview-Next-Btn" onClick={Update}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyPreviewView;
