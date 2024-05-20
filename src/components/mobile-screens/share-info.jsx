import React from "react";
import './mobile-screen.css';
import { Link } from "react-router-dom";
import Vector from "../../assets/vector-logo.svg";

const ShareInfo = () => {
    return (
        <div style={{ backgroundColor: 'white', height: '100vh' }}>
            <div className="bg-white d-flex justify-content-center">
                <div className="share-info-card bg-white p-4">
                    <div className="text-center d-flex justify-content-center text-black mt-5 bg-white align-items-center" style={{ marginBottom: '30%'}}>
                        <img src={Vector} alt="Vector" className="bg-white" style={{ height: '25px'}} />
                        <p className="share-info-text-title bg-white">TAPRELAX</p>
                    </div>

                    <div className="card mt-5 p-5" style={{ background: 'linear-gradient(to right, #DCDCDC, #F8F8F8)', borderRadius: '10px', border: '1px solid #DCDCDC' }}>
                        <div className="share-info-rounded-image"></div>
                        <div className="card-body text-center bg-transparent">
                            <h2 className="bg-transparent">Would you like to share</h2>
                            <h2 className="bg-transparent">Your info back with Samul</h2>
                        </div>
                    </div>
                    <form className="share-info-form bg-white">
                        <div className="share-form-group mt-5 d-flex justify-content-center bg-white">
                            <input type="text" className="form-control rounded-input" id="name" placeholder="Your name" />
                        </div>
                        <div className="share-form-group mt-4 d-flex justify-content-center bg-white">
                            <input type="email" className="form-control rounded-input" id="email" placeholder="Your mail id" />
                        </div>
                        <div className="share-form-group mt-4 d-flex justify-content-center bg-white">
                            <input type="text" className="form-control rounded-input" id="phone" placeholder="Your phone number" />
                        </div>
                    </form>
                    <div className="mt-5 d-flex justify-content-center bg-white">
                        <button type="button" className="Connect-btn">Connect</button>
                    </div>
                    <p className="mt-5 text-center bg-white"><Link to="" style={{ fontSize: '16px', color: '#1DDA63' }}>Skip</Link></p>
                </div>
            </div>
        </div>
    );
}

export default ShareInfo;
