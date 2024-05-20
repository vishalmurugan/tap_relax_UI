import React, { useContext, useEffect, useState } from "react";
// import InstagramIcon from "../../../assets/instagram-icon.svg";
// import PinterestIcon from "../../../assets/pintrest-icon.svg";
// import FacebookIcon from "../../../assets/facebook-icon.svg";
// import XIcon from "../../../assets/x-icon.svg";
// import LinkedInIcon from "../../../assets/linkedin-icon.svg";
// import YoutubeIcon from "../../../assets/youtube-icon.svg";
// import ContactIcon from "../../../assets/whatsapp-icon.svg";
// import EmailIcon from "../../../assets/email-colored-icon.svg";
// import LinksIcon from "../../../assets/links-icon.svg";
// import LocationIcon from "../../../assets/location.svg";
import toggleOffIcon from "../../../assets/toggle-off-icon.svg";
import toggleOnIcon from "../../../assets/toggle-on-icon.svg";
import "../dashboard.css";
import ShareContact from "./shareContact";
import GlobalStore  from "../../../Store";
import ApiService from "../../../services/ApiService";

const ShareCard = ({ card,onClose }) => {

  const [showShareContact, setShowShareContact] = useState(false);
 const {getSocialMedia}= useContext(GlobalStore);
 const [personalLinks,setPersonalLinks]= useState([]);
 const [companyLinks,setCompanyLinks]= useState([]);

  const openShareContact = async() => {
  
    try {
      var request={};
      request.order_id=card.order.id;
      request.personal_details_link=personalLinks;
      request.company_details_link=companyLinks;
      var response = await ApiService.shareConatct(request);
      if(response.status===200){

      }
    } catch (error) {
      
    }
    //setShowShareContact(!showShareContact);
  }

  useEffect(()=>{
    if(Object.keys(card).length !==0){
      if(card.order.cardType===0){
      var personal= card.personal_details.social_media.filter(i=>{
        var obj=getSocialMedia.find(j=>j.id===i.id);
        if(obj){
          i.image=obj.image;
          i.name=obj.name;
          i.isShown=false;
        }
        return i;
      });

      setPersonalLinks(personal);
      }
      var company= card.company_details.social_media.filter(i=>{
        var obj=getSocialMedia.find(j=>j.id===i.id);
        if(obj){
          i.image=obj.image;
          i.name=obj.name;
          i.isShown=false;
        }
        return i;
      });

      setCompanyLinks(company);
    }
  },[card,getSocialMedia])

  // const [toggles, setToggles] = useState({
  //   Instagram: false,
  //   Pinterest: false,
  //   Facebook: false,
  //   Twitter: false,
  //   LinkedIn: false,
  //   Youtube: false,
  //   Contact: false,
  //   Email: false,
  //   Links: false,
  //   Location: false,
  // });

  // const [socialMedia] = useState([
  //   {
  //     name: "Instagram",
  //     icon: InstagramIcon,
  //   },
  //   {
  //     name: "Pinterest",
  //     icon: PinterestIcon,
  //   },
  //   {
  //     name: "Facebook",
  //     icon: FacebookIcon,
  //   },
  //   {
  //     name: "Twitter",
  //     icon: XIcon,
  //   },
  //   {
  //     name: "LinkedIn",
  //     icon: LinkedInIcon,
  //   },
  //   {
  //     name: "Youtube",
  //     icon: YoutubeIcon,
  //   },
  //   {
  //     name: "Contact",
  //     icon: ContactIcon,
  //   },
  //   {
  //     name: "Email",
  //     icon: EmailIcon,
  //   },
  //   {
  //     name: "Links",
  //     icon: LinksIcon,
  //   },
  //   {
  //     name: "Location",
  //     icon: LocationIcon,
  //   },
  // ]);

  // const handleToggle = (socialMedia) => {
  //   setToggles((prevState) => ({
  //     ...prevState,
  //     [socialMedia]: !prevState[socialMedia],
  //   }));
  // };

  const closeShareContact = () => {
    setShowShareContact(false);
  }

  const changePesonalTogle=function(index){
    setPersonalLinks(prevItems => 
      prevItems.map((item, idx) => 
        idx === index ? { ...item, isShown: !item.isShown } : item
      )
    );
  }

  const changeCompanyTogle=function(index){
    setCompanyLinks(prevItems => 
      prevItems.map((item, idx) => 
        idx === index ? { ...item, isShown: !item.isShown } : item
      )
    );
  }

  return (
    <>
      {showShareContact && <ShareContact onClose={closeShareContact} />}
      {!showShareContact && (
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
            <h2 className="text-center mt-5" style={{ fontSize: "30px" }}>
              Share Card
            </h2>
            <div className="d-flex justify-content-center mt-5" style={{position: 'relative'}}>
            <button className="close-button fs-3 fw-bold" style={{ position: "absolute", top: "10px", right: "20px", cursor: "pointer", backgroundColor: 'white', border: 'none', color: 'black' }} onClick={onClose}>X</button>
              <div className="share-card-container bg-white p-5">
                <div className="bg-white">
                  <div className="d-flex justify-content-center bg-transparent">
                    <div className="share-cards-profile-pic"></div>
                  </div>
                  <h2 className="bg-white text-dark text-center">John Doe</h2>
                </div>
                <div className="card-body bg-white">
                  <h3 className="text-center text-dark bg-white">
                    Customize what to share
                  </h3>
                  <div className="row mt-5 bg-white">
                   {card?.order?.cardType===0 && <div className="col bg-transparent">
                    <h2 className="text-center text-dark bg-white">Personal Details</h2>
                      <ul className="bg-white">
                        
                        {personalLinks.map((social, index) => (
                          <li
                            className="social-media-list bg-white"
                            key={index}
                            onClick={()=>{changePesonalTogle(index)}}
                          >
                            <img
                              src={'/icons/'+social.image}
                              alt={social.name}
                              className="bg-white"
                            />
                            <span className="social-media-names bg-white">
                              {social.name}
                            </span>
                            <div className="bg-white">
                              <img
                                className="toggle-icon bg-white"
                                src={
                                  social.isShown? toggleOnIcon  : toggleOffIcon
                                }
                                alt={
                                   "Toggle Off"
                                }
                              />
                            </div>
                          </li>
                        ))}

                      </ul>
                    </div> } 
                    <div className="col bg-transparent">
                      <h2 className="text-center text-dark bg-white">Company Details</h2>
                      <ul className="bg-white">
                      {companyLinks.map((social, index) => (
                          <li
                            className="social-media-list bg-white"
                            key={index}
                            onClick={()=>{changeCompanyTogle(index)}}
                          >
                            <img
                              src={'/icons/'+social.image}
                              alt={social.name}
                              className="bg-white"
                            />
                            <span className="social-media-names bg-white">
                              {social.name}
                            </span>
                            <div className="bg-white">
                              <img
                                className="toggle-icon bg-white"
                                src={
                                  social.isShown? toggleOnIcon  : toggleOffIcon
                                }
                                alt={
                                   "Toggle Off"
                                }
                              />
                            </div>
                          </li>
                        ))}

                        {/*socialMedia.slice(6).map((social, index) => (
                          <li
                            className="social-media-list bg-white"
                            key={index}
                            onClick={() => handleToggle(social.name)}
                          >
                            <img
                              src={social.icon}
                              alt={social.name}
                              className="bg-white"
                            />
                            <span className="social-media-names bg-white">
                              {social.name}
                            </span>
                            <div className="bg-white">
                              <img
                                className="toggle-icon bg-white"
                                src={
                                  toggles[social.name]
                                    ? toggleOnIcon
                                    : toggleOffIcon
                                }
                                alt={
                                  toggles[social.name]
                                    ? "Toggle On"
                                    : "Toggle Off"
                                }
                              />
                            </div>
                          </li>
                        ))*/}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-center mt-5">
                  <button className="share-contact" onClick={openShareContact}>
                    Share contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareCard;
