import React, { useEffect, useState } from "react";
import '../dashboard.css';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { validate } from "../../../services/ValidationService";
import personFillIcon from "../../../assets/person-filled-icon.svg";
import emailIcon from "../../../assets/email-icon.svg";
import locationIcon from "../../../assets/location-icon.svg";
import bagIcon from "../../../assets/bag-icon.svg";
import ApiService from "../../../services/ApiService";

const ViewContact = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [getContactById, setContactById] = useState({});

    const updateContactFields = [
        { name: 'email', validation: Yup.string().required().email() },
        { name: 'mobile_number', validation: Yup.string().required().matches(/^\d{10}$/, 'Phone number must be 10 digits') },
        { name: 'first_name', validation: Yup.string().required() },
        { name: 'last_name', validation: Yup.string().required() },
        { name: 'address', validation: Yup.string().required() },
        { name: 'job_title', validation: Yup.string().required() },
        { name: 'notes', validation: Yup.string().required() },
    ];

    /** 
    * To handle input fields change function
    * @e - we capture the input fields events
    **/
    const handleChange = async (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        const Errors = await validate({ [name]: value }, updateContactFields);
        setError({ ...error, [name]: Errors[name] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Errors = await validate(data, updateContactFields);
        setError(Errors);

        if (!Object.keys(Errors).length) {
            var request = { ...data }; // Use the current state data for request
            var response = await ApiService.updateContact(request);
            if (response.status === 200) {
                toast.success(response.data.message)
                navigate("/contact");
            } else {
                toast.error('Validation Error');
            }
        }
    };

    useEffect(() => {
       const getContactById = JSON.parse(sessionStorage.getItem('contact'));
       if (getContactById) {
           setData(getContactById);
           setContactById(getContactById);
       }
    }, []);

    return (
        <div style={{ marginTop: '12%' }}>
            <div className="new-Contact-card-container">
                <div className="new-Contact-card h-auto p-5">
                    <div className="row">
                        <div className="col-5 mt-5 text-center" style={{ fontSize: '16px' }}>
                            <div className="d-flex justify-content-center">
                                <div className="share-cards-profile-pic"></div>
                            </div>
                            <p>{getContactById.first_name}{getContactById.last_name}</p>
                            <p> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-envelope-fill me-3" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                            </svg></span>{getContactById.email}</p>
                            <p> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-telephone-fill me-3" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg></span> {getContactById && getContactById.mobile_number}</p>
                            <p> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-geo-alt-fill me-3" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg></span> {getContactById && getContactById.address}</p>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="form-row mt-5">
                                        <div className="col-md-6 col-sm-1">
                                            <div class="form-group mt-5">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span>
                                                            <img src={personFillIcon} alt="personFillIcon" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control text-center"
                                                        id="first_name"
                                                        name="first_name"
                                                        placeholder="First Name"
                                                        onChange={handleChange}
                                                        value={data.first_name ? data.first_name : ''}
                                                    />
                                                </div>
                                            </div>
                                            {error && error.first_name && <h4 className="text-danger text-capitalize">{error.first_name}</h4>}
                                        </div>
                                        <div className="col-md-6">
                                            <div class="form-group mt-5">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span>
                                                            <img src={personFillIcon} alt="personFillIcon" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control text-center"
                                                        id="last_name"
                                                        name="last_name"
                                                        placeholder="Last name"
                                                        onChange={handleChange}
                                                        value={data.last_name ? data.last_name : ''}
                                                    />
                                                </div>
                                            </div>
                                            {error && error.last_name && <h4 className="text-danger text-capitalize">{error.last_name}</h4>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <div class="form-group mt-5">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span>
                                                            <img src={emailIcon} alt="personFillIcon" />
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
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12">
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
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <div className="form-group mt-5">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span>
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
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <div className="form-group mt-5">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span>
                                                            <img src={bagIcon} alt="bagIcon" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control text-center"
                                                        id="job_title"
                                                        name="job_title"
                                                        placeholder="Job title"
                                                        onChange={handleChange}
                                                        value={data.job_title ? data.job_title : ''}
                                                    />
                                                </div>
                                            </div>
                                            {error && error.job_title && <h4 className="text-danger text-capitalize">{error.job_title}</h4>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <div className="form-group mt-5">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span>
                                                            <img src={bagIcon} alt="bagIcon" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control text-center"
                                                        id="notes"
                                                        name="notes"
                                                        placeholder="Enter your notes"
                                                        onChange={handleChange}
                                                        value={data.notes ? data.notes : ''}
                                                    />
                                                </div>
                                            </div>
                                            {error && error.notes && <h4 className="text-danger text-capitalize">{error.notes}</h4>}
                                        </div>
                                    </div>
                                    <div className="text-end new-contact-button-container col-md-12">
                                        <div>
                                            <button
                                                type="submit"
                                                className="new-contact-save-btn"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewContact;