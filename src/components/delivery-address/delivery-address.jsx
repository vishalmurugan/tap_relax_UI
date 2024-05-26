import React, { useState } from "react";
import "./delivery-address.css";
import { useNavigate } from "react-router-dom";
import personIcon from "../../assets/person-filled-icon.svg";
import phoneIcon from "../../assets/phone-icon-filled.svg";
import locationIcon from "../../assets/location-icon.svg";
import * as Yup from 'yup';
import { validate } from "../../services/ValidationService";

const DeliveryAddress = ({data,setData,setPage}) => {
 
  const [error, setError] = useState({});

  const DeliveryAddressFields = [
    { name: 'full_name', validation: Yup.string().required() },
    { name: 'mobile_number', validation: Yup.string().required().matches(/^\d{10}$/, 'Phone number must be 10 digits') },
	  { name: 'shipping_address', validation: Yup.string().required() },
	  { name: 'city', validation: Yup.string().required() },
   // { name: 'country', validation: Yup.string().required() },
    { name: 'pincode', validation: Yup.string().required() },
    { name: 'state', validation: Yup.string().required() },
  ]

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  /** 
	* To handle input fields change function
	* @e - we capture the input fields events
	**/
  const handleChange=async(e)=>{
	  e.preventDefault();
	  const {name,value}=e.target;  
	  setData({...data,[name]:value});
	  const Errors = await validate({ [name]: value }, DeliveryAddressFields);
	  setError({...error,[name]:Errors[name]});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Errors = await validate(data, DeliveryAddressFields);
    setError(Errors);

    if(!Object.keys(Errors).length){
      setPage(6);
      // var request={};
      // request.name=data.name;
      // request.mobile_number=data.mobile_number;
      // request.address=data.address;
      // request.city=data.city;
      // request.country=data.country;
      // request.pincode=data.pincode;
      // const response = await ApiService.placeOrder(request);
      // console.log(response);
      //  if(response.status===200){
      //    sessionStorage.setItem('userId',response.data.userId);
      //    toast.success(response.data.message)
      //   navigate("/register-verification");
      //  } else {
      //    toast.error('Validation Error');
      //  }
     }
  }

  return (
    <div>
      <h1 style={{ marginTop: "5%" }} className="text-center">
        Delivery address
      </h1>
      <div className="d-flex justify-content-center mt-5">
        <div className="delivery-card h-auto p-5">
          <div className="card-body" style={{ marginTop: "5%" }}>
            <form autoComplete="off">
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
                        className="form-control"
                        id="full_name"
                        name="full_name"
                        placeholder="Enter name"
                        onChange={handleChange}
                        value={data.full_name?data.full_name:''}
                      />
                    </div>
                  </div>
                  {error && error.full_name && <h4 className="text-danger text-capitalize">{error.full_name}</h4>}
                </div>
                <div className="col-md-6">
                  <div className="form-group mt-5">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span>
                          <img src={phoneIcon} alt="phoneIcon" />
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="mobile_number"
                        name="mobile_number"
                        placeholder="Your phone number"
                        onChange={handleChange}
                        value={data.mobile_number ? data.mobile_number : ''}
                      />
                    </div>
                  </div>
                  {error && error.mobile_number && <h4 className="text-danger text-capitalize">{error.mobile_number}</h4>}
                </div>
              </div>
              <div className="form-group ms-4 me-4 mt-3">
                <label>Shipping address</label>
                <input
                  type="text"
                  className="form-control"
                  id="shipping_address"
                  name="shipping_address"
                  onChange={handleChange}
                  value={data.shipping_address ? data.shipping_address : ''}
                />
              </div>
              {error && error.shipping_address && <h4 className="text-danger text-capitalize">{error.shipping_address}</h4>}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group  mt-5">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span>
                          <img src={locationIcon} alt="locationIcon" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="Enter your City"
                        onChange={handleChange}
                        value={data.city ? data.city : ''}
                      />
                    </div>
                  </div>
                  {error && error.city && <h4 className="text-danger text-capitalize">{error.city}</h4>}
                </div>
                <div className=" col-md-6">
                  <div className="form-group mt-5">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span>
                          <img src={locationIcon} alt="locationIcon" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="pincode"
                        name="pincode"
                        placeholder="Enter your Pincode"
                        onChange={handleChange}
                        value={data.pincode ? data.pincode : ''}
                      />
                    </div>
                  </div>
                  {error && error.pincode && <h4 className="text-danger text-capitalize">{error.pincode}</h4>}
                </div>
              </div>
              <div className="row">
              <div className="col-md-6">
                  <div className="select-form-group mt-5">
                    <select className="form-select" name="state"  onChange={handleChange} aria-label="Default select example">
                      <option defaultValue="" selected>Select State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  {error && error.state && <h4 className="text-danger text-capitalize">{error.state}</h4>}
                </div>
                {/* <div className="col-md-6">
                  <div className="form-group  mt-5">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span>
                          <img src={locationIcon} alt="locationIcon" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="country"
                        name="country"
                        placeholder="Enter your country"
                        onChange={handleChange}
                        value={data.country ? data.country : ''}
                      />
                    </div>
                  </div>
                  {error && error.country && <h4 className="text-danger text-capitalize">{error.country}</h4>}
                </div> */}
              </div>
              <div className="text-end">
                <button type="button" onClick={handleSubmit} className="delivery-address-next-btn ms-5">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
