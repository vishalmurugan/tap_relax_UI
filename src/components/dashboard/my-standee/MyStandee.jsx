import React, { useEffect, useState } from 'react';
import '../mycards/my-cards.css';
import landlineIcon from "../../../assets/landline-icon.svg";
import shareIcon from "../../../assets/share-icon.svg";
import MyAccount from "../my-account/MyAccount";
import ApiService from "../../../services/ApiService";

const MyStandee = () => {
  const [cardsData, setCardsData] = useState([]);
  const [showModal, setShowModal] = useState({});

  useEffect(() => {
    
(async function(){
  const response =await ApiService.getAllCardsListForDashboard({type:1});
  if(response.status === 200) {
      setCardsData(response.data?.items || []);
    }
})()
      
  }, []);

  const openShare = (id) => {
    setShowModal({show:true,card:id});
  };

  const closeShare = () => {
    setShowModal({});
  };


  return (
    <>
      {Object.keys(showModal).length !==0 && <MyAccount modal={showModal} onClose={closeShare} />}
     
      {Object.keys(showModal).length ===0 && <div>
              <h2 className="dashboard-title-text">My Standee</h2>
              <div className="my-cards-container">
                <div className="my-cards-outer-layout p-5">
                  {/*<div className="d-flex justify-content-end me-5">
                    <div className="row">
                      <span className="peoples-saved">
                        Peoples Saved <h2>252</h2>
                        <span className="peoples-lapped ms-5">
                          Peoples tapped <h2>268</h2>
                        </span>
                      </span>
                    </div>
                  </div>*/}
                  <div className="cards">
                    <div className="row">
                      {cardsData.map((card, index) => (
                        <div className="col-sm-4" key={index}>
                          <article className="my-cards-profile p-5">
                            <div className="bg-transparent text-center text-capitalize">
                              <div className="d-flex justify-content-center">
                                <div className="bg-transparent">
                                <img
                                  className="rounded-circle landline-icon"
                                  src={process.env.REACT_APP_SERVERURL+'default.svg'}
                                  height={100}
                                  width={100}
                                  alt="landlineicon"
                                />
                                </div>
                              </div>
                              <h3 className="bg-transparent">{card?.card_name}</h3>
                            </div>
                            <hr />
                            <div
                              className="bg-transparent"
                              style={{ fontSize: "12px" }}
                            >
                              <h3 className="bg-transparent text-start">
                                Contact Info
                              </h3>
                              {/*<p className="bg-transparent text-start">
                                <img
                                  className="landline-icon me-3"
                                  src={landlineIcon}
                                  alt="landlineicon"
                                />
                                {card.landline}
                      </p>*/}
                              <p className="bg-transparent text-start">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-telephone-fill me-3"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                                  />
                                </svg>
                                <span>+91 {card.company_details.mobile_number}</span>
                              </p>
                              <p className="bg-transparent text-start">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-envelope-fill me-3"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                                <span>{card.company_details.email}</span>
                              </p>
                            </div>
                            <button
                              className="share-button"
                              onClick={() => openShare(card.id)}
                            >
                              <img
                                className="share-icon bg-transparent"
                                src={shareIcon}
                                alt=""
                              />
                              Share
                            </button>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>}
      
    </>
  );
};

export default MyStandee;
