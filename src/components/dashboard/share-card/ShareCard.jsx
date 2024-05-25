import React, { useContext, useEffect, useState } from "react";
import toggleOffIcon from "../../../assets/toggle-off-icon.svg";
import toggleOnIcon from "../../../assets/toggle-on-icon.svg";
import "../dashboard.css";
import GlobalStore from "../../../Store";
import ApiService from "../../../services/ApiService";
import { toast } from "react-toastify";
import cancelIcon from "../../../assets/cancel-icon.svg";
import ShareContact from "./shareContact";

const ShareCard = ({ card, onClose }) => {
  const { getSocialMedia } = useContext(GlobalStore);
  const [personalLinks, setPersonalLinks] = useState([]);
  const [companyLinks, setCompanyLinks] = useState([]);
  const [url,setUrl]=useState('');
  const [showModal,setModal]=useState(false);

  const openShareContact = async () => {
    try {
      const request = {
        order_id: card.order.id,
        personal_details_link: personalLinks,
        company_details_link: companyLinks,
      };
      const response = await ApiService.shareConatct(request);
      if (response.status === 200) {
        setUrl(window.location.origin+'/profile-info/'+response.data.shareId);
        setModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    if(Object.keys(card).length !==0){
      if(card.order.cardType===0){
        var personal= card.personal_details.social_media.filter(i=>{
          var obj=getSocialMedia.find(j=>j.id===i.id);
          if(obj){
            i.image=obj.image;
            i.name=obj.name;
            i.isShown=true;
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
          i.isShown=true;
        }
        return i;
      });
      setCompanyLinks(company);
    }
  }, [card, getSocialMedia]);

  const changePesonalTogle = (index) => {
    setPersonalLinks(prevItems =>
      prevItems.map((item, idx) =>
        idx === index ? { ...item, isShown: !item.isShown } : item
      )
    );
  };

  const changeCompanyTogle = (index) => {
    setCompanyLinks(prevItems =>
      prevItems.map((item, idx) =>
        idx === index ? { ...item, isShown: !item.isShown } : item
      )
    );
  };

  const notify = () => {
    toast.info(
      <div>
        <span>URL copied to clipboard</span>
        <button onClick={copyToClipboard} className="copy-url-button">
          Copy URL
        </button>
      </div>
    );
  };

  const copyToClipboard = () => {
    const textToCopy = "https://example.com";
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast.dismiss();
      toast.success("URL copied to clipboard");
    })
  };

  const cloaseModal=()=>{
    setModal(!showModal);
  }

  return (
    <>
    {showModal &&<ShareContact link={url} onClose={cloaseModal}/>}
      {!showModal && <div>
        <div className="share-contact-modal" style={{ maxWidth: "80%", marginTop: '10%' }}>
          <div className="d-flex justify-content-center mt-5" style={{ position: 'relative' }}>
            <div className="share-card-container bg-white p-5">
              <div className="bg-white text-end">
                <img src={cancelIcon} alt="cancelIcon" onClick={onClose} className="bg-white"/>
              </div>
              <div className="bg-white">
                <div className="d-flex justify-content-center bg-transparent">
                  <div className="share-cards-profile-pic">
                  <img
                                  className="rounded-circle landline-icon"
                                  src={process.env.REACT_APP_SERVERURL+'default.svg'}
                                  height={100}
                                  width={100}
                                  alt="landlineicon"
                                />
                  </div>
                </div>
                <h2 className="bg-white text-dark text-center text-capitalize">{card?.order?.card_name}</h2>
              </div>
              <div className="card-body bg-white">
                <h3 className="text-center text-dark bg-white">
                  Customize what to share
                </h3>
                <div className="row mt-5 bg-white">
                  {card?.order?.cardType === 0 && (
                    <div className="col bg-transparent">
                      <h2 className="text-center text-dark bg-white">Personal Details</h2>
                      <ul className="bg-white">
                        {personalLinks.map((social, index) => (
                          <li
                            className="social-media-list bg-white"
                            key={index}
                            onClick={() => { changePesonalTogle(index) }}
                          >
                            <img
                              src={'/icons/' + social.image}
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
                                  social.isShown ? toggleOnIcon : toggleOffIcon
                                }
                                alt={
                                  "Toggle Off"
                                }
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="col bg-transparent">
                    <h2 className="text-center text-dark bg-white">Company Icons</h2>
                    <ul className="bg-white">
                      {companyLinks.map((social, index) => (
                        <li
                          className="social-media-list bg-white"
                          key={index}
                          onClick={() => { changeCompanyTogle(index) }}
                        >
                          <img
                            src={'/icons/' + social.image}
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
                                social.isShown ? toggleOnIcon : toggleOffIcon
                              }
                              alt={
                                "Toggle Off"
                              }
                            />
                          </div>
                        </li>
                      ))}
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
      </div>}
    </>
  );
};

export default ShareCard;
