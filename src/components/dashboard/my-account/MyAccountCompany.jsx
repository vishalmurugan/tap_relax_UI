import React, { useState } from "react";
import "./MyAccount.css";
import InstagramIcon from "../../../assets/instagram-icon.svg";
import PinterestIcon from "../../../assets/pintrest-icon.svg";
import FacebookIcon from "../../../assets/facebook-icon.svg";
import XIcon from "../../../assets/x-icon.svg";
import LinkedInIcon from "../../../assets/linkedin-icon.svg";
import YoutubeIcon from "../../../assets/youtube-icon.svg";
import ContactIcon from "../../../assets/whatsapp-icon.svg";
import EmailIcon from "../../../assets/email-colored-icon.svg";
import LinksIcon from "../../../assets/links-icon.svg";
import LocationIcon from "../../../assets/location.svg";
import ShareCard from "../share-card/ShareCard";

const MyAccount = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [socialIcons] = useState([
    {
      name: "Instagram",
      icon: InstagramIcon,
    },
    {
      name: "Pinterest",
      icon: PinterestIcon,
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
    },
    {
      name: "Twitter",
      icon: XIcon,
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
    },
    {
      name: "Youtube",
      icon: YoutubeIcon,
    },
  ]);

  const [contactIcons] = useState([
    {
      name: "Contact",
      icon: ContactIcon,
      type: "contact",
    },
    {
      name: "Email",
      icon: EmailIcon,
      type: "contact",
    },
    {
      name: "Links",
      icon: LinksIcon,
      type: "contact",
    },
    {
      name: "Location",
      icon: LocationIcon,
      type: "contact",
    },
  ]);

  const openShare = () => {
    setShowModal(!showModal);
  };

  const closeShare = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    {showModal && (<ShareCard onClose={closeShare} />)}
    {!showModal && (
              <div
              className="share-contact-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}
            >
              <div className="share-contact-modal" style={{ maxWidth: "80%" }}>
                <h2 className="account-title-text">My Account</h2>
                <div className="my-account-container">
                  <div className="my-account-outer-layout mt-5">
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginTop: "10%" }}
                    >
                      <div
                        className="my-account-inner-card"
                        style={{ position: "relative" }}
                      >
                        <button
                          className="close-button fs-3 fw-bold"
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            cursor: "pointer",
                            backgroundColor: "white",
                            border: "none",
                            color: "black",
                          }}
                          onClick={onClose}
                        >
                          X
                        </button>
                        <div className="bg-white row d-flex justify-content-center align-items-center">
                          <div className="col bg-white">
                            <div className="account-profile-picture"></div>
                          </div>
                          <div className="col bg-white">
                            <h2 className="text-dark bg-white">John doe</h2>
                            <p
                              className="text-dark bg-white"
                              style={{ fontSize: "15px" }}
                            >
                              Founder
                            </p>
                          </div>
                          <div className="col-6 bg-white">
                            <div className="bg-white">
                              <button className="action-button" onClick={openShare}>
                                Share
                              </button>
                              <button className="action-button">Customize</button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white row mt-5">
                          <div className="col-md-6 col-sm-6 bg-white">
                            <h3
                              className="text-dark bg-white"
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Social Links
                            </h3>
                            <div className="d-flex flex-wrap bg-white mt-5">
                              {socialIcons.map((media, index) => (
                                <div key={index} className="text-center m-3 bg-white">
                                  <img
                                    src={media.icon}
                                    alt={media.name}
                                    style={{ width: "40px" }}
                                    className="bg-white"
                                  />
                                  <p
                                    style={{ fontSize: "16px" }}
                                    className="text-dark bg-white"
                                  >
                                    {media.name}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
      
                          <div className="col-md-6 col-sm-6 bg-white">
                            <h3
                              className="text-dark bg-white"
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Contact Info
                            </h3>
                            <div className="d-flex flex-wrap bg-white mt-5">
                              {contactIcons.map((media, index) => (
                                <div key={index} className="text-center m-3 bg-white">
                                  <img
                                    src={media.icon}
                                    alt={media.name}
                                    style={{ width: "40px" }}
                                    className="bg-white"
                                  />
                                  <p
                                    style={{ fontSize: "16px" }}
                                    className="text-dark bg-white"
                                  >
                                    {media.name}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )}
    </>
  );
};

export default MyAccount;
