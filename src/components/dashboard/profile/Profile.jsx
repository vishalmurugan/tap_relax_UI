import React, { useEffect, useState ,useContext} from "react";
import "../dashboard.css";
import  GlobalStore from "../../../Store";
import ApiService from "../../../services/ApiService";
import * as Yup from 'yup';
import { validate } from "../../../services/ValidationService";

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [error, setError] = useState({});
  const [editMode, setEditMode] = useState(false);
  const {getProfile,setProfile}= useContext(GlobalStore);

  useEffect(() => {
    setProfileData(getProfile)
  }, [getProfile]);

  const fields = [
    { name: 'email', validation: Yup.string().required().email() },
    { name: 'mobile_number', validation: Yup.string().required().matches(/^\d{10}$/, 'Phone number must be 10 digits') },
    { name: 'username', validation: Yup.string().required() },
    { name: 'address', validation: Yup.string().required() }
  ]

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleImageChange = async(event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.size > 1024 * 1024 * 5) {
        alert("File size is too large! Please choose a file under 5 MB.");
        return;
      }
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
          setProfileData(prev=>({...prev,photo:image}));
        }
      } catch (error) {
        console.log(error)
      }

    }
  };

  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProfileData(prev=>({...prev,[name]: value}));
    const Errors = await validate({ [name]: value }, fields);
    setError({ ...error, [name]: Errors[name] });
  };

  const handleSubmit=async (e) => {
    const Errors = await validate(profileData, fields);
    setError(Errors);
    if (!Object.keys(Errors).length) {
     var response= await ApiService.updateProfile(profileData);
     if(response?.status===200){
      setProfile(profileData);
      toggleEditMode();
     }
    }
  }

  return (
    <div>
      <h2 className="dashboard-title-text">Profile</h2>
      <div className="profile-card-container">
        <div className="profile-card p-5 mt-5">
          <div className="row">
            <div className="col">
            <label htmlFor="profileImageInput">
              <div
                className="rounded-circle overflow-hidden bg-white"
                
              >
                 {editMode ?<img src={process.env.REACT_APP_SERVERURL+(profileData?.photo || 'default.svg')} alt="selectedImage" className="bg-white" style={{ width: "100px", height: "100px" }}/> :
                <img src={process.env.REACT_APP_SERVERURL+(profileData?.photo || 'default.svg')} alt="selectedImage" className="bg-white" style={{ width: "100px", height: "100px" }}/> }
              </div>
            </label>
            {editMode ?<input label="upload image" type="file" id="profileImageInput" accept="image/jpeg, image/png" hidden onChange={handleImageChange} /> :
            <input label="upload image" type="file" id="profileImageInput" accept="image/jpeg, image/png" hidden /> }
          
            </div>
            <div className="col-10 mt-5">
              <h5 className="mt-3" style={{ fontSize: '20px' }}>{profileData?.username}</h5>
            </div>
          </div>
          <div>
            <form className="mt-5 row">
              <div className="col-md-4">
                <div className="form-group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-person-fill me-3" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <label htmlFor="name">Name</label>
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={handleChange}
                      value={profileData?.username}
                      placeholder="Enter name"
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={profileData?.username}
                      readOnly
                    />
                  )}
                </div>
                {error && error.username && <h4 className="text-danger text-capitalize">{error.username}</h4>}
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-telephone-fill me-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <label htmlFor="phone">Phone number</label>
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control"
                      name="mobile_number"
                      value={profileData.mobile_number}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={profileData.mobile_number}
                      readOnly
                    />
                  )}
                </div>
                {error && error.mobile_number && <h4 className="text-danger text-capitalize">{error.mobile_number}</h4>}
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-envelope-fill me-3" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                  </svg>
                  <label htmlFor="email">Email</label>
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Enter email address"
                      value={profileData.email}
                      readOnly
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder={profileData.email}
                      readOnly
                    />
                  )}
                </div>
                {error && error.email && <h4 className="text-danger text-capitalize">{error.email}</h4>}
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-geo-alt-fill me-3" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <label htmlFor="location">Location</label>
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      onChange={handleChange}
                      placeholder="Your location"
                      value={profileData.address}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder={profileData.address}
                      readOnly
                    />
                  )}
                </div>
                {error && error.address && <h4 className="text-danger text-capitalize">{error.address}</h4>}
              </div>
            </form>
          </div>
          {editMode ? <button className="edit-button" onClick={handleSubmit}>
            Update
          </button>:
          <button className="edit-button" onClick={toggleEditMode}>
           Edit
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
