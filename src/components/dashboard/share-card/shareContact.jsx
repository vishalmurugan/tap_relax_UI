import React, { useState } from "react";
import "../dashboard.css";
import InstagramIcon from "../../../assets/instagram-icon.svg";
import PinterestIcon from "../../../assets/pintrest-icon.svg";
import FacebookIcon from "../../../assets/facebook-icon.svg";
import whatsapp from "../../../assets/whatsapp-icon.svg";
import LinkedInIcon from "../../../assets/linkedin-icon.svg";
import YoutubeIcon from "../../../assets/youtube-icon.svg";
import AppNavBar from "../../layout/app-navbar/app-navbar";

const ShareContact = ({ onClose }) => {
    const socialMedia = [
        { name: "Instagram", icon: InstagramIcon },
        { name: "Pinterest", icon: PinterestIcon },
        { name: "Facebook", icon: FacebookIcon },
        { name: "Whatsapp", icon: whatsapp },
        { name: "LinkedIn", icon: LinkedInIcon },
        { name: "Youtube", icon: YoutubeIcon },
    ];

    return (
        <div className="share-contact-overlay" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 }}>
            <div className="share-contact-modal" style={{ maxWidth: "80%" }}>
                <h2 className="text-center mt-5" style={{ fontSize: '30px' }}>Share Card</h2>
                <div className="d-flex justify-content-center mt-5" style={{position: 'relative'}}>
                <button className="close-button fs-3 fw-bold" style={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer", backgroundColor: 'white', border: 'none', color: 'black' }} onClick={onClose}>X</button>

                    <div className="share-contact-card p-5">
                        <div className="row d-flex align-items-center bg-white mt-3">
                            <p className="text-center bg-white text-black" style={{ fontSize: '18px', fontWeight: 'bold' }}>Share via</p>
                            {socialMedia.map((media, index) => (
                                <div key={index} className="col-md-4 col-sm-6 bg-white mb-3 mt-5">
                                    <div className="text-center bg-white">
                                        <img src={media.icon} alt={media.name} className="bg-white" />
                                        <p style={{ fontSize: '16px' }} className="bg-white text-dark">{media.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareContact;
