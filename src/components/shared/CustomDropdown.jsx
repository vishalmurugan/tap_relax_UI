import React, { useState } from 'react';

const CustomDropdown = ({ buttonLabel, options }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="col-md-6">
      <div className="select-form-group mt-5">
        {/* Custom dropdown */}
        <div className={dropdownOpen ? "dropdown show" : "dropdown"}>
          <button className="dropdown-toggle add-social-media-btn" type="button" id="dropdownMenuLink" onClick={toggleDropdown}>
            {buttonLabel || "Select"} {/* Display custom button label or default */}
          </button>
          <div className="social-media-drop-down-item">
            <div style={{ backgroundColor: 'black' }} className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownMenuLink">
              {options.map((option, index) => (
                <div key={index} className="dropdown-item text-white">
                  <img src={option.icon} alt={option.label} className="me-3" /> {option.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomDropdown;
