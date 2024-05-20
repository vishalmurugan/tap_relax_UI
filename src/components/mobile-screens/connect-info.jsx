import React from "react";
import './mobile-screen.css';
import { Link } from "react-router-dom";

const ConnectInfo = () => {
    return (
        <div className="bg-white p-5">
            <div style={{ backgroundColor: 'white', height: '100vh' }}>
                <div className="d-flex justify-content-center bg-white">
                    <div className="connect-info-card bg-white p-5">
                        <div className="text-center text-black bg-white">
                            <h2 className="bg-white">Get your own card now and</h2>
                            <h2 className="bg-white">Connect Digital</h2>
                        </div>
                        <div className="d-flex justify-content-center mt-5 bg-white">
                            <div className="rounded-image bg-white"></div>
                        </div>
                        <div className="dot-dots bg-white">
                            <span className="firstDot"></span>
                            <span className="secondDot"></span>
                            <span className="thirdDot"></span>
                            <span className="fourthDot"></span>
                        </div>
                        <div className="d-flex justify-content-center mt-5 bg-white">
                            <div className="rounded-image"></div>
                        </div>
                        <div className="mt-5 d-flex justify-content-center bg-white">
                            <button type="button" className="Connect-btn">Get your card</button>
                        </div>
                        <p className="mt-5 text-center bg-white"><Link to="" style={{ fontSize: '16px', color: '#1DDA63' }}>Skip</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectInfo;
