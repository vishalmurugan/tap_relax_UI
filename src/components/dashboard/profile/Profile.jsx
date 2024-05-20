import React, { useEffect, useState } from "react";
import "../dashboard.css";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch("profile.json")
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
      })
  }, []);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <h2 className="dashboard-title-text">Profile</h2>
      <div className="profile-card-container">
        <div className="profile-card p-5 mt-5">
          <div className="row">
            <div className="col">
              <div className="profile-rounded-image"></div>
            </div>
            <div className="col-10 mt-5">
              <h5 className="mt-3" style={{ fontSize: '20px' }}>Fernandes</h5>
            </div>
          </div>
          <div>
            <form className="mt-5">
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
                      id="name"
                      placeholder="Enter name"
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={profileData.name}
                      readOnly
                    />
                  )}
                </div>
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
                      id="phone"
                      placeholder="Enter phone number"
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={profileData.phone}
                      readOnly
                    />
                  )}
                </div>
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
                      id="email"
                      placeholder="Enter email address"
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
              </div>
              <div className="col-md-4 mt-5">
                <div className="form-group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1DDA63" class="bi bi-geo-alt-fill me-3" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <label htmlFor="location">Location</label>
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Your location"
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder={profileData.location}
                      readOnly
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
          {/* Button to toggle edit mode */}
          <button className="edit-button" onClick={toggleEditMode}>
            {editMode ? "Update" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
