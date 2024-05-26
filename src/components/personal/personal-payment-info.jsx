import React, { useEffect, useState } from "react";
import "../delivery-address/delivery-address.css";
import { Link, useLocation } from "react-router-dom";
import * as Yup from 'yup';
import { validate } from "../../services/ValidationService";

const PersonalPaymentInformation = ({setData,data ,setPage}) => {
  const location = useLocation();
  const [link,setLink]=useState('');
  const [error, setError] = useState({});
  const fields = [
    { name: 'payment_links', validation:  Yup.array().min(1, 'At least one payment link is required.') }
  ]
 
    const addLink=async ()=>{
        if(link){

          setData((prevState) => {
            const updatedPaymentLinks = [...prevState.payment_links, link];
            return {
              ...prevState,
              payment_links: updatedPaymentLinks,
            };
          });

  
        setLink('');

      const updatedData = {
        ...data,
        payment_links: [...data.payment_links, link],
      };

      const errors = await validate(updatedData, fields);
      setError(errors);
      }
    }

  const handleRemoveTag=(i)=>{
    setData((prevState) => ({
      payment_links: prevState.payment_links.filter((_, index) => index !== i)
    }));
  }

  const handleSubmit=async()=>{
    const Errors = await validate(data, fields);
    setError(Errors);
    if (!Object.keys(Errors).length) {
     setPage(4)
    }
  }

  return (
    <>
    <form style={{ marginTop: '20%' }} autoComplete="off">
      <h1 className="text-center" style={{ fontSize: '30px' }}>Enter Payment Link</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="form-group col-md-8 mt-5 mb-5">
          <input 
            type="text" 
            className="form-control text-center" 
            id="link"
            name="link"
            placeholder="Enter upi Link"  
            onChange={(e)=>setLink(e.target.value)}               
            value={link ? link : ''} 
          />
        </div>
        <div>
          <button type="button" onClick={addLink}
              className="btn btn-success">ADD</button>
        </div>
      </div>
      {error && error.payment_links && <h4 className="text-danger text-center text-capitalize">{error.payment_links}</h4>}
      <div className="tag-container">
           
      {data.payment_links.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
                <span onClick={() => handleRemoveTag(index)}>x</span>
              </div>
            ))}
          
          </div>
    </form>  
    <div className="text-end">
          <div>
          <button
              type="button"
              className="back-button me-5"
              onClick={()=>setPage(2)}
            >
              Back
            </button>
            <button
              type="button"
              className="Update-button"
              onClick={handleSubmit}
            >
              Preview and Generate Card
            </button>
          </div>
        </div>
    </>
  );
}

export default PersonalPaymentInformation;
