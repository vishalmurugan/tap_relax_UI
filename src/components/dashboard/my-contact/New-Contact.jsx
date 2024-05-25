import React, { useState } from "react";
import '../dashboard.css'
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { validate } from "../../../services/ValidationService";
import personFillIcon from "../../../assets/person-filled-icon.svg";
import emailIcon from "../../../assets/email-icon.svg";
import locationIcon from "../../../assets/location-icon.svg";
import bagIcon from "../../../assets/bag-icon.svg";
import { toast } from 'react-toastify';
import ApiService from "../../../services/ApiService";

const NewContact = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [error, setError] = useState({});

    const cancel = () => {
        navigate("/user/contact");
    }

    const newContactFields = [
        { name: 'email', validation: Yup.string().required().email() },
        { name: 'mobile_number', validation: Yup.string().required().matches(/^\d{10}$/, 'Phone number must be 10 digits') },
        { name: 'first_name', validation: Yup.string().required() },
        { name: 'last_name', validation: Yup.string().required() },
        { name: 'address', validation: Yup.string().required() },
        { name: 'designation', validation: Yup.string().required() },
    ]

    /** 
    * To handle input fields change function
    * @e - we capture the input fields events
    **/
    const handleChange = async (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        const Errors = await validate({ [name]: value }, newContactFields);
        setError({ ...error, [name]: Errors[name] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Errors = await validate(data, newContactFields);
        setError(Errors);

        if (!Object.keys(Errors).length) {
            var request = {};
            request.email = data.email;
            request.mobile_number = data.mobile_number;
            request.first_name = data.first_name;
            request.last_name = data.last_name;
            request.address = data.address;
            request.job_title = data.job_title;
            var response = await ApiService.createContact(request);
            if (response.status === 200) {
                toast.success(response.data.message)
                navigate("/user/contact");
            } else if (response.status === 500) {
                toast.error('Email already exist')
            } else {
                toast.error('Validation Error');
            }
        }

    };

    return (
        <div>
            <h2 className="dashboard-title-text">New Contact</h2>
            <div className="new-Contact-card-container">
                <div className="new-Contact-card h-auto mt-5 p-5">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <div className="form-group mt-5">
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
                            <div className="row">
                                <div className="col-md-6">
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
                                <div className="col-md-6 mt-2">
                                    <div class="form-group  mt-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button class="dropdown-toggle p-2" style={{ backgroundColor: '#149644', color: 'white', border: 'none' }} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+91</button>
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
                                </div>
                                {error && error.address && <h4 className="text-danger text-capitalize">{error.address}</h4>}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
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
                                                id="designation"
                                                name="designation"
                                                placeholder="Job title"
                                                onChange={handleChange}
                                                value={data.designation ? data.designation : ''}
                                            />
                                        </div>
                                    </div>
                                    {error && error.designation && <h4 className="text-danger text-capitalize">{error.designation}</h4>}
                                </div>
                            </div>
                            <div className="text-end new-contact-button-container col-md-12">
                                <div>
                                    <button
                                        type="button"
                                        className="new-contact-cancel-btn me-5"
                                        onClick={cancel}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="new-contact-save-btn "
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewContact;