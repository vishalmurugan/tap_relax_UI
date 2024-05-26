import React, { useEffect, useState } from "react";
import Vector from "../../assets/vector-logo.svg";
import './mobile-screen.css';
import phonecolorIcon from "../../assets/phone-fill-color-icon.svg";
import emailcolorIcon from "../../assets/email-fill-color-icon.svg";
import linkcolorIcon from "../../assets/link-fill-color-icon.svg";
import locationcolorIcon from "../../assets/location-fill-color-icon.svg";
import Accordion from 'react-bootstrap/Accordion';
import trxSport from "../../assets/TRX Sportz.svg";
import ApiService from "../../services/ApiService";
import { Link,useParams } from "react-router-dom";
import * as Yup from "yup";
import { validate } from "../../services/ValidationService";
import { toast } from "react-toastify";
import cancelIcon from "../../assets/cancel-icon.svg";

const ProfileInfo = () => {
    const [companyDetails, setCompanyDetails] = useState({});
    const [profile, setProfile] = useState({});
    const [personalDetails, setPersonalDetails] = useState({});
    const [social_media, setMedia] = useState({});
    const [showContactForm, setShowContactForm] = useState(false);
    const [data, setData]=useState({});
    const [error, setError]=useState({});
    const { id } = useParams();
    useEffect(() => {

        (async function(){
    
            var response= await ApiService.viewUserCardDetails(id);
            if(response.status===200){
                setCompanyDetails(response?.data?.company_details || {});
                setPersonalDetails(response?.data?.personal_details || {});
                setProfile(response?.data?.profile || {});
                setMedia(response?.data?.social_media || {});
            }
      
          })()
    }, []);

    const handleExchangeContact = () => {
        setShowContactForm(true);
    };

    const closeContactForm = () => {
        setShowContactForm(false);
    }

    const contactFileds = [
        { name: "email", validation: Yup.string().required().email() },
        { name: "first_name", validation: Yup.string().required() },
        { name: 'mobile_number', validation: Yup.string().required().matches(/^\d{10}$/, 'Phone number must be 10 digits') },
    ];

  /** 
	* To handle input fields change function
	* @e - we capture the input fields events
	**/
    const handleChange=async(e)=>{
        e.preventDefault();
        const {name,value}=e.target;  
        setData({...data,[name]:value});
        const Errors = await validate({ [name]: value }, contactFileds);
        setError({...error,[name]:Errors[name]});
    };

        /**
    * To handle contact submit function
    * @e - we capture the contact form events
    **/
    const handleSubmit = async (e) => {
        e.preventDefault();
        const Errors = await validate(data, contactFileds);
        setError(Errors);

        if (!Object.keys(Errors).length) {
            data.order_id=id;
            const response = await ApiService.exchangeContact(data);
            if (response.status === 200) {
                closeContactForm();
                toast.success(response.data.message);
            } else {
                toast.error(response.data.error);
            }
        }
    };

    return (
        <div className="bg-white p-5">
            <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
                {/* Show the first part if showContactForm is false */}
                { !showContactForm && (
                    <>
                        <div className="text-center d-flex justify-content-center text-black mt-5 bg-white align-items-center" style={{ marginBottom: '30%' }}>
                            <img src={Vector} alt="Vector" className="bg-white" style={{ height: '25px' }} />
                            <p className="share-info-text-title bg-white">TAPRELAX</p>
                        </div>
                        

                            <div className="card mt-5 p-5" style={{ background: 'linear-gradient(to right, #DCDCDC, #F8F8F8)', borderRadius: '10px', border: '1px solid #DCDCDC' }}>
                                    <div className="share-info-rounded-image">
                                    
                          <img
                              className="rounded-circle landline-icon"
                              src={process.env.REACT_APP_SERVERURL+(profile?.photo ||'default.svg')}
                              height={100}
                              width={100}
                              alt="landlineicon"
                          />
                                
                                    </div>
                                    <div className="card-body text-center bg-transparent text-capitalize">
                                
                                <h2 className="bg-transparent">{profile?.username}</h2>
                                <h3 className="bg-transparent text-secondary">{companyDetails?.description}</h3>
                            </div>
                                </div>
                        <div className="mt-5 d-flex justify-content-center bg-white">
                            <button type="button" className="contact-btn me-5" onClick={handleExchangeContact}>Exchange contact</button>
                            <button type="button" className="contact-btn">Save contact</button>
                        </div>
                        <div className="mt-5 d-flex justify-content-center bg-white">
                            <button type="button" className="Get-card-btn">Get your card</button>
                        </div>
                        {Object.keys(personalDetails).length!==0 &&<>
                        <h2 className="bg-white text-dark mt-5">Social links</h2>
                        <div  className="row mt-5">
                        {Object.keys(social_media).length !==0 && social_media?.personal_details_link && social_media?.personal_details_link.map((social,index)=>(
                            <>
                            {social.isShown===true && <div key={index} className="col bg-white"><a href={social.url} target="_blank"><img src={'/icons/' + social.image} alt={social.image} className="bg-white" /></a>
                                <p className="bg-white text-dark">{social.name}</p></div>}
                        </>
                        ))}
                       </div>
                        <h2 className="bg-white mt-5 text-black">Contact info</h2>
                        <div className="contact-info-card p-3 mt-4">
                            <div className="row d-flex align-items-center bg-transparent">
                                <div className="col-1 bg-transparent">
                                    <img src={phonecolorIcon} alt="phonecolorIcon" className="bg-transparent" />
                                </div>
                                <div className="col bg-transparent  ms-3">
                                    <span className="bg-transparent text-dark">Phone numbers</span><br />
                                        <span className="bg-transparent text-dark">+91 {personalDetails.mobile_number}</span>
                
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
                                   
                                        <span className="bg-transparent text-dark">{personalDetails.email}</span>
                                
                                </div>
                            </div>
                        </div>
                        </>}
                        {/* <div className="contact-info-card p-3 mt-2">
                            <div className="row d-flex align-items-center bg-transparent">
                                <div className="col-1 bg-transparent">
                                    <img src={linkcolorIcon} alt="linkcolorIcon" className="bg-transparent" />
                                </div>
                                <div className="col bg-transparent ms-3">
                                    <span className="bg-transparent text-dark">Website</span><br />
                                    
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="contact-info-card p-3 mt-2">
                            <div className="row d-flex align-items-center bg-transparent">
                                <div className="col-1 bg-transparent">
                                    <img src={locationcolorIcon} alt="locationcolorIcon" className="bg-transparent" />
                                </div>
                                <div className="col bg-transparent ms-3">
                                    <span className="bg-transparent text-dark">Location</span><br />
                                    {personalDetails.address}
                                </div>
                            </div>
                        </div> */}
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
                                                <span className="bg-transparent text-white">
                                                   
                                                        <span >+91 {companyDetails.mobile_number}</span>
                                                   
                                                </span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row d-flex align-items-center bg-transparent">
                                            <div className="col-1 bg-transparent">
                                                <img src={linkcolorIcon} alt="linkcolorIcon" className="bg-transparent accordition-img" />
                                            </div>
                                            <div className="col bg-transparent ms-3">
                                                <span className="bg-transparent text-white">
                                                    {companyDetails.web_address}
                                                </span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row d-flex align-items-center bg-transparent">
                                            <div className="col-1 bg-transparent">
                                                <img src={emailcolorIcon} alt="emailcolorIcon" className="bg-transparent accordition-img" />
                                            </div>
                                            <div className="col bg-transparent ms-3">
                                                <span className="bg-transparent text-white">
                                                   
                                                        <span>{companyDetails.email}</span>
                                                
                                                </span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row d-flex align-items-center bg-transparent">
                                            <div className="col-1 bg-transparent">
                                                <img src={locationcolorIcon} alt="locationcolorIcon" className="bg-transparent accordition-img" />
                                            </div>
                                            <div className="col bg-transparent ms-3">
                                                <span className="bg-transparent text-white">
                                                    {companyDetails.address}
                                                </span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row d-flex align-items-center bg-transparent">
                                            <div className="col-1 bg-transparent">
                                                <img src={'/icons/rating-icon.svg'} alt="locationcolorIcon" className="bg-transparent accordition-img" />
                                            </div>
                                            <div className="col bg-transparent ms-3">
                                                <span className="bg-transparent text-white">
                                                    <a href={companyDetails?.review_link} target="_blank" style={{ textDecoration: "none", color: "#fff8ae" }}>Click Here To Rate Us</a>
                                                </span>
                                            </div>
                                        </div>
                                        <h2 className="mt-5">Social network</h2>
                                        <div  className="row mt-5">
                                        {Object.keys(social_media).length !==0 && social_media?.company_details_link && social_media?.company_details_link .map((social,index)=>(
                                           <>
                                            {social.isShown===true && <div key={index} className="col"><a href={social.url} target="_blank"><img src={'/icons/' + social.image} alt={social.image} width='44'/></a>
                                                <p style={{ fontSize: '12px' }}>{social.name}</p></div>}
                                                </>
                                        ))}
                                        </div>
                                       
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </>
                )}
                {/* Contact exchange form */}
                {showContactForm && (
                    <div style={{ top: '10vh' }}>
                        <div className="bg-white d-flex justify-content-center">
                            <div className="share-info-card bg-white p-4">
                                <div className="text-end bg-white">
                                    <img src={cancelIcon} alt="cancelIcon" className="bg-white" onClick={closeContactForm} />
                                </div>
                                <div className="text-center d-flex justify-content-center text-black mt-5 bg-white align-items-center" style={{ marginBottom: '30%'}}>
                                    <img src={Vector} alt="Vector" className="bg-white" style={{ height: '25px'}} />
                                    <p className="share-info-text-title bg-white">TAPRELAX</p>
                                </div>

                                <div className="card mt-5 p-5" style={{ background: 'linear-gradient(to right, #DCDCDC, #F8F8F8)', borderRadius: '10px', border: '1px solid #DCDCDC' }}>
                                    <div className="share-info-rounded-image">
                                    
                          <img
                              className="rounded-circle landline-icon"
                              src={process.env.REACT_APP_SERVERURL+(profile?.photo ||'default.svg')}
                              height={100}
                              width={100}
                              alt="landlineicon"
                          />
                                

                                    </div>
                                    <div className="card-body text-center bg-transparent">
                                        <h2 className="bg-transparent">Would you like to share</h2>
                                        <h2 className="bg-transparent">Your info back with {profile?.username}</h2>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit} autoComplete="off" className="share-info-form bg-white">
                                    <div className="share-form-group mt-5 d-flex justify-content-center bg-white">
                                        <input 
                                            type="text" 
                                            className="form-control rounded-input" 
                                            id="first_name"                                            name="first_name" 
                                            onChange={handleChange}
                                            value={data.first_name?data.first_name:''}
                                            placeholder="Your name" 
                                        />
                                    </div>
                                    {error && error.first_name && <h4 className="text-danger text-capitalize mt-2 text-center bg-white">{error.first_name}</h4>}
                                    <div className="share-form-group mt-4 d-flex justify-content-center bg-white">
                                        <input 
                                            type="email" 
                                            className="form-control rounded-input" 
                                            id="email" 
                                            placeholder="Your mail id"
                                            name="email" 
                                            onChange={handleChange}
                                            value={data.email?data.email:''}
                                        />
                                    </div>
                                    {error && error.email && <h4 className="text-danger text-capitalize mt-2 text-center bg-white">{error.email}</h4>}
                                    <div className="share-form-group mt-4 d-flex justify-content-center bg-white">
                                        <input 
                                            type="number"
                                            className="form-control rounded-input"
                                            placeholder="Your phone number"
                                            onChange={handleChange}
                                            value={data.mobile_number ? data.mobile_number : ''}
                                            name="mobile_number" 
                                        />
                                    </div>
                                    {error && error.mobile_number && <h4 className="text-danger text-capitalize mt-2 text-center bg-white">{error.mobile_number}</h4>}
                                    <div className="mt-5 d-flex justify-content-center bg-white">
                                    <button type="submit" className="Connect-btn">Connect</button>
                                </div>
                                </form>
                                <p className="mt-5 text-center bg-white"><Link onClick={closeContactForm} style={{ fontSize: '16px', color: '#1DDA63' }}>Skip</Link></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileInfo;
