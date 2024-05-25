import React, { useEffect, useRef, useState } from "react";
import "../delivery-address/delivery-address.css";
import { Link } from "react-router-dom";
import personIcon from "../../assets/person-filled-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import * as Yup from 'yup';
import { validate } from "../../services/ValidationService";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import instagramIcon from "../../assets/instagram-icon.svg";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import ApiService from "../../services/ApiService";

const PersonalInformation = ({setData,data ,setPage,socialMedia}) => {
  const [error, setError] = useState({});
  const [media, setMedia] = useState(socialMedia);
  const [socialmediaDropdown, setSocialMediaDropdown] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const dropdownRef = useRef(null);
  const [link,setLink]=useState({});

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setSocialMediaDropdown(false); // Close dropdown if clicked outside
    }
  };

  const toggleOpen = (id) =>{
    setLink({id:id,url:''})
    setBasicModal(!basicModal);
  } 

  const personalStepFields = [
    { name: 'email', validation: Yup.string().required().email() },
    { name: 'mobile_number', validation: Yup.string().required().matches(/^\d{10}$/, 'Phone number must be 10 digits') },
    { name: 'full_name', validation: Yup.string().required() },
    { name: 'address', validation: Yup.string().required() },
    { name: 'description', validation: Yup.string().required() },
    { name: 'social_media', validation: Yup.array().min(1, 'At least one social media link is required.') },
  ]

  /** 
  * To handle input fields change function
  * @e - we capture the input fields events
  **/
  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    const Errors = await validate({ [name]: value }, personalStepFields);
    setError({ ...error, [name]: Errors[name] });
  };

  const handleRemoveImage = () => {
    setData(prev=>({...prev,photo:'default.svg'}));
  };

  const handleImageChange = async(event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      if (file.size > 1024 * 1024 * 5) {
        alert("File size is too large! Please choose a file under 5 MB.");
        return;
      }

      // Validate image type (optional)
      const validImageTypes = ["image/jpeg", "image/png"];
      if (!validImageTypes.includes(file.type)) {
        alert("Invalid image type! Please choose a JPEG or PNG image.");
        return;
      }

      try {
        const formData = new FormData();
        formData.append('file', file);
        var response = await ApiService.photoUpload(formData);
        if(response.status===200){
          var image=response.data.image;
          setData(prev=>({...prev,photo:image}));
        }
      } catch (error) {
        console.log(error)
      }
    }
  };

  const toggleSocialmediaDropdown = () => {
    setSocialMediaDropdown(!socialmediaDropdown);
  };  

  const handleSubmit=async()=>{
    const Errors = await validate(data, personalStepFields);
    setError(Errors);
    if (!Object.keys(Errors).length) {
      setPage(2)
    }
  }

  const saveLink=()=>{
    var arr=media.map(item=>{
      if(item.id===link.id){
        return {...item,url:link.url}
      }else{
        return item
      }
    })
    setMedia(arr)
    setLink({});
    setData(prevState => ({
      ...prevState,
      social_media: arr.filter(({id,url,image})=>{
        if(url){
        return {id,url,image}
        }
        })
    }));
  setBasicModal(!basicModal);
  }

  return (
    <>
      <div className="justify-content-start">
        <div className="row">
          <div className="col-md-2">
            <label htmlFor="profileImageInput">
              <div
                className="rounded-circle overflow-hidden bg-white"
                style={{ width: "100px", height: "100px" }}
              >
                <img src={process.env.REACT_APP_SERVERURL+data?.photo} alt="selectedImage" className="bg-white" />
              </div>
            </label>
            <input label="upload image" type="file" id="profileImageInput" accept="image/jpeg, image/png" hidden onChange={handleImageChange} />
          </div>
          <div className="col">
            <p style={{ marginTop: '7%' }}>
              <Link onClick={handleRemoveImage} style={{ textDecoration: 'none', fontSize: '16px', color: 'gray' }}>Remove image</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mt-5">
            <div className="input-group">
              <div className="input-group-prepend">
                <span>
                  <img src={personIcon} alt="personIcon" />
                </span>
              </div>
              <input
                type="text"
                className="form-control text-center"
                id="full_name"
                name="full_name"
                placeholder="Enter Name"
                onChange={handleChange}
                value={data.full_name ? data.full_name : ''}
              />
            </div>
          </div>
          {error && error.full_name && <h4 className="text-danger text-capitalize text-nowrap">{error.full_name}</h4>}
        </div>
        <div className="col-md-6">
          <div className="form-group  mt-5">
            <div className="input-group">
              <div className="input-group-prepend">
                <button className="dropdown-toggle p-2" style={{ backgroundColor: '#149644', color: 'white', border: 'none' }} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+91</button>
              </div>
              <input
                type="number"
                className="form-control text-center"
                placeholder="Enter phone number"
                onChange={handleChange}
                value={data.mobile_number ? data.mobile_number : ''}
                name="mobile_number"
              />
            </div>
          </div>
          {error && error.mobile_number && <h4 className="text-danger text-capitalize">{error.mobile_number}</h4>}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mt-5">
            <div className="input-group">
              <div className="input-group-prepend">
                <span>
                  <img src={emailIcon} alt="emailIcon" />
                </span>
              </div>
              <input
                type="email"
                className="form-control text-center"
                id="email"
                name="email" onChange={handleChange}
                value={data.email ? data.email : ''}
                placeholder="Enter email id"
              />
            </div>
          </div>
          {error && error.email && <h4 className="text-danger text-capitalize">{error.email}</h4>}
        </div>
        <div className="col-md-6 mt-5">
        <div ref={dropdownRef} className={socialmediaDropdown ? "dropdown show" : "dropdown"}>
            <button className="dropdown-toggle add-social-btn" style={{ backgroundColor: '#272727', border: 'none', borderRadius: '5px' }} type="button" id="dropdownMenuLink" onClick={toggleSocialmediaDropdown}>
              Add social media
            </button>
            <div className="dropdown-model">
              <div className={socialmediaDropdown ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownMenuLink">
               
               {media.length && media.map((item,i)=>(
                <div onClick={()=>toggleOpen(item.id)} className="row" key={i}>
                  <div className="col">
                <span><img style={{ height: '20px', width: '20px' }} src={'/icons/'+item.image} alt="instagramIcon" /></span>
                <span className="ms-3 fs-3">{item.name}</span>
                </div>
                <div className="col text-end">
                <input className="form-check-input ms-5" type="radio" checked={item?.url} name={'social'+i} id={'social'+i} />
                </div>
              </div>
               ))}
  
                {/* <Link onClick={toggleOpen} className="add-social-media-text mt-5">+ Add more link</Link> */}
              </div>
            </div>
            
          </div>
          {error && error.social_media && <h4 className="text-danger text-capitalize">{error.social_media}</h4>}
        </div>
        
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group mt-5">
            <div className="input-group">
              <div className="input-group-prepend">
                <span style={{ marginLeft: '-90%' }}>
                  <img src={locationIcon} alt="locationIcon" />
                </span>
              </div>
              <input
                type="text"
                className="form-control text-center"
                id="address"
                name="address"
                placeholder="Enter your address"
                onChange={handleChange}
                value={data.address ? data.address : ''}
              />
            </div>
          </div>
          {error && error.address && <h4 className="text-danger text-capitalize">{error.address}</h4>}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group mt-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control text-center"
                id="description"
                name="description"
                placeholder="Describe service you provide"
                onChange={handleChange}
                value={data.description ? data.description : ''}
              />
            </div>
          </div>
          {error && error.description && <h4 className="text-danger text-capitalize">{error.description}</h4>}
        </div>
      </div>
      <div className="text-end">
          <div>
            <button
              type="button"
              className="Update-button"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </div>

      <MDBModal open={basicModal}  tabIndex='-1'>
        <MDBModalDialog centered>
          <MDBModalContent className="bg-black   p-5" style={{ border: '1px solid white' }}>
            <MDBModalHeader>
              <MDBModalTitle style={{ fontSize: '20px' }}>Add Link</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="form-group mt-5">
                <input type="text" className="form-control" id="exampleInputEmail1" value={link.url||''} onChange={(e)=>setLink(prev=>({...prev,url:e.target.value}))} placeholder="Enter Social media Link" />
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className="text-black fs-3"  onClick={()=>setBasicModal(!basicModal)} style={{ backgroundColor: '#1DDA63', border: 'none' }}>Close</MDBBtn>
              <MDBBtn className="text-black fs-3"  onClick={saveLink} style={{ backgroundColor: '#1DDA63', border: 'none' }}>
                Save
              </MDBBtn>
              </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default PersonalInformation;
